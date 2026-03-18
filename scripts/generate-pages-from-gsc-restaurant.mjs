import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const repoRoot = process.cwd();
const gscDir = path.join(repoRoot, 'gsc');
const ensureDir = (p) => fs.mkdirSync(p, { recursive: true });

function unzipIfNeeded(zipPath, extractDir) {
  ensureDir(extractDir);
  // Clean extract dir
  for (const entry of fs.existsSync(extractDir) ? fs.readdirSync(extractDir) : []) {
    fs.rmSync(path.join(extractDir, entry), { recursive: true, force: true });
  }

  if (!fs.existsSync(zipPath)) {
    throw new Error(`GSC zip not found: ${zipPath}`);
  }

  execSync(`tar -xf "${zipPath}" -C "${extractDir}"`, { stdio: 'inherit' });
}

function parseCsvLine(line) {
  // Minimal CSV parser for GSC exports (usually plain text in this file).
  const out = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"' && (i === 0 || line[i - 1] !== '\\')) {
      inQuotes = !inQuotes;
      continue;
    }
    if (ch === ',' && !inQuotes) {
      out.push(cur);
      cur = '';
      continue;
    }
    cur += ch;
  }
  out.push(cur);
  return out.map((s) => s.trim());
}

function parseQueriesCsv(queriesCsvPath) {
  const raw = fs.readFileSync(queriesCsvPath, 'utf8');
  const lines = raw.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length < 2) return [];

  const headers = parseCsvLine(lines[0]);
  const qIndex = headers.findIndex((h) => /query|top queries/i.test(h));
  const impIndex = headers.findIndex((h) => /impressions/i.test(h));
  const posIndex = headers.findIndex((h) => /position/i.test(h));

  if (qIndex === -1 || impIndex === -1 || posIndex === -1) {
    throw new Error(`Could not find Query/Impressions/Position in Queries.csv headers: ${headers.join(' | ')}`);
  }

  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = parseCsvLine(lines[i]);
    if (cols.length <= Math.max(qIndex, impIndex, posIndex)) continue;

    const query = (cols[qIndex] ?? '').replace(/^"|"$/g, '');
    const impressions = Number(cols[impIndex]) || 0;
    const position = Number(cols[posIndex]) || 0;
    if (!query) continue;

    rows.push({ query, impressions, position });
  }

  return rows;
}

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

function normalizeRestaurantPath(query) {
  const ql = query.toLowerCase();
  const base = slugify(query);
  const needsPrefix = !ql.includes('restaurant');
  const slug = needsPrefix ? `restaurant-${base}` : base;
  return `/${slug}`;
}

function isBrandQuery(query) {
  const q = query.toLowerCase();
  const brandTerms = ['therestaurantownersguide', 'axiantpartners', 'restaurant owners guide'];
  return brandTerms.some((t) => q.includes(t));
}

function pickTopics(rows, limit, existingPaths) {
  const candidates = rows
    .filter((r) => r.impressions >= 3 && r.position >= 1 && r.position <= 40 && !isBrandQuery(r.query))
    .sort((a, b) => {
      const impDiff = b.impressions - a.impressions;
      if (impDiff !== 0) return impDiff;
      return Math.abs(a.position - 20) - Math.abs(b.position - 20);
    });

  const picked = [];
  const usedPaths = new Set();
  for (const r of candidates) {
    const p = normalizeRestaurantPath(r.query);
    if (existingPaths.has(p)) continue;
    if (usedPaths.has(p)) continue;
    usedPaths.add(p);

    picked.push({
      path: p,
      query: r.query,
      impressions: r.impressions,
      position: r.position,
      title: titleCase(r.query),
    });
    if (picked.length >= limit) break;
  }
  return picked;
}

function titleCase(s) {
  return s
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function escapeTsString(s) {
  // For use in single-quoted TS strings in topicPages.tsx.
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\r?\n/g, ' ');
}

function keywordFocus(query) {
  const q = query.toLowerCase();
  if (/(payroll|labor|wages)/i.test(q)) return 'payroll';
  if (/(vendor payments|vendor payment|delayed|waiting|slow pay|invoices|invoice)/i.test(q)) return 'invoices';
  if (/(equipment|ovens|coolers|repairs|breakdown)/i.test(q)) return 'equipment';
  if (/(seasonal|slow season|slowdown|off season)/i.test(q)) return 'seasonal';
  if (/(cash advance)/i.test(q)) return 'cash-advance';
  if (/(working capital)/i.test(q)) return 'working-capital';
  return 'general';
}

function buildRestaurantTopicEntry(topic, todayYmd) {
  const q = topic.query.trim();
  const focus = keywordFocus(q);
  const qEsc = escapeTsString(q);

  const baseTitle = topic.title;
  const path = topic.path;

  const title = `${baseTitle} | The Restaurant Owners Guide`;
  const description = `Guide for restaurant owners and operators about “${q}”. Explains what the term usually means, why cash flow timing matters, common problems, and the funding options that may help. Includes practical next steps and FAQs (AEO + GEO-friendly).`;

  const h1 = baseTitle;

  const lead = (() => {
    if (focus === 'payroll') return `Restaurant payroll problems happen when labor is due on a schedule but revenue doesn’t arrive in time. This guide explains “${q}” in plain English and helps you choose the right restaurant funding or working capital path to cover payroll gaps.`;
    if (focus === 'invoices') return `“${q}” usually points to invoice or vendor payment delays that create cash flow pressure. Learn where the delay shows up, how it affects payroll, inventory, and operations, and what restaurant funding options help bridge the gap.`;
    if (focus === 'equipment') return `When “${q}” shows up, equipment and repair timing can drain cash at the worst moment. This guide explains what owners usually mean by the term and compares funding options to keep your kitchen running.`;
    if (focus === 'seasonal') return `Seasonal slowdowns can make “${q}” feel urgent even when your restaurant is healthy long-term. This guide breaks down how timing gaps happen and what funding options help cover the off-season.`;
    if (focus === 'cash-advance') return `This guide explains “${q}” and how restaurant cash advance or working-capital style funding can help when you need money fast. It covers typical timing, how repayment is commonly structured, and when cash advance is a better fit than a loan.`;
    if (focus === 'working-capital') return `“${q}” often describes working capital needs: money for payroll, inventory, and operations when revenue doesn’t line up with bills. This guide explains working capital for restaurants and helps you decide what fits your situation.`;
    return `This guide explains “${q}” for restaurant owners: what it usually means, why restaurant cash flow timing matters, and how to decide on next steps using practical comparisons and FAQ.`;
  })();

  const faqItems = (() => {
    const mk = (question, answer) => ({ q: question, a: answer });
    if (focus === 'payroll') {
      return [
        mk(`What is “${q}” for restaurant owners?`, `“${q}” usually describes payroll or labor timing gaps. Labor is often due weekly/biweekly while revenue arrives unevenly, so cash feels short right before payroll.`),
        mk(`How fast can restaurant payroll funding work?`, `Many restaurant funding options offer decisions and funding in about 24–48 hours when documentation is ready. Timing depends on the provider and your application completeness.`),
        mk(`Is payroll funding the same as a loan?`, `Not exactly. Many restaurant payroll funding options function like cash advance or working capital, where repayment can align with revenue instead of fixed monthly payments. Terms vary by provider.`),
        mk(`What documents help you get approved faster?`, `Prepare recent bank statements, and for revenue-based options have card processing or sales data. Being organized can shorten review time.`),
      ];
    }
    if (focus === 'invoices') {
      return [
        mk(`What causes “${q}” for restaurants?`, `Vendor/invoice delays usually come from payment application timing, approval steps, and net terms. Even profitable restaurants can feel cash-poor while invoices wait.`),
        mk(`How do I manage cash flow when invoices are delayed?`, `Plan the delay into your cash forecast, then bridge the gap with working capital, cash advance, or invoice-related funding options that provide faster access to money.`),
        mk(`Should I wait to get funding until the last day?`, `It’s better not to. When you wait, you may lose options. Early planning helps you match funding timing to your restaurant’s operational schedule.`),
        mk(`Does restaurant funding affect credit?`, `Applying can create a hard inquiry (a small temporary impact). Qualification depends on your provider and your documentation.`),
      ];
    }
    if (focus === 'equipment') {
      return [
        mk(`What does “${q}” mean in equipment terms?`, `It usually refers to equipment repair, replacement, or maintenance timing issues. Cash drains quickly when critical kitchen gear fails.`),
        mk(`What funding options help with equipment problems?`, `Restaurants typically consider equipment financing, working capital, or cash advance depending on urgency and qualification. Compare terms and repayment structure before choosing.`),
        mk(`How quickly can equipment funding be approved?`, `Timing depends on provider workflows and whether the equipment needs quotes/invoices. Many options can still move quickly when documentation is complete.`),
        mk(`How do I reduce downtime risk?`, `Use a maintenance plan, keep receipts and specs organized, and have a funding path ready so repairs don’t shut operations unexpectedly.`),
      ];
    }
    if (focus === 'seasonal') {
      return [
        mk(`Why does seasonality cause “${q}”?`, `Off-season slowdowns reduce revenue while fixed costs (rent, some labor, utilities) remain. The result is predictable cash pressure.`),
        mk(`What should restaurant owners do in slow season?`, `Match your plan to your revenue cycle, reduce burn where possible, and consider working capital or cash advance to cover payroll and inventory gaps.`),
        mk(`Is there a better time to apply?`, `Yes. Applying earlier gives you more flexibility. If you wait until cash is already gone, options narrow.`),
        mk(`Will funding repayment hurt during slow months?`, `Many revenue-based products scale repayment with business performance. Still, compare terms to confirm the structure fits your worst-case weeks.`),
      ];
    }
    if (focus === 'cash-advance') {
      return [
        mk(`What is “${q}” in plain English?`, `It usually refers to fast-access restaurant funding when cash timing is tight. It’s often structured around revenue and can provide quicker decisions.`),
        mk(`How does repayment commonly work?`, `Repayment is often tied to revenue (for example daily sales/card processing) rather than a fixed schedule. Terms vary, so review the agreement carefully.`),
        mk(`When is cash advance the wrong fit?`, `It may not be ideal if your business can’t sustain the repayment pattern or if you need long-term capital for expansion. Compare with working capital and loans.`),
        mk(`How do I compare options effectively?`, `Look at funding speed, total cost/payback, repayment mechanics, documentation requirements, and qualification factors.`),
      ];
    }
    if (focus === 'working-capital') {
      return [
        mk(`What does “${q}” mean for restaurants?`, `It usually means you need working capital—flexible funds to cover payroll, inventory, and operations when revenue timing doesn’t match bills.`),
        mk(`Is working capital the same as a line of credit?`, `Not always. Some working capital products behave like revolving access, while others are advance-based. Compare structures and repayment mechanics.`),
        mk(`What determines approval and cost?`, `Providers often consider your revenue history, sales consistency, and documentation readiness. Costs vary by provider and your qualifications.`),
        mk(`How can I use working capital to reduce cash stress?`, `Use it to smooth timing gaps: payroll float, inventory purchases before busy season, and operating expenses when invoices wait.`),
      ];
    }
    return [
      mk(`What does “${q}” mean for restaurant owners?`, `It usually describes a cash-flow timing problem and a decision about which funding option fits best.`),
      mk(`How do I choose the right restaurant funding option?`, `Start with the gap type (payroll, invoices, equipment, or seasonal). Then compare funding speed, cost, and repayment mechanics.`),
      mk(`Does this guide include practical next steps?`, `Yes. Each page includes a clear workflow and frequently asked questions designed to help owners decide.`),
      mk(`How can this help SEO and AEO?`, `The page answers the exact query in natural language and includes FAQ schema for answer engines.`),
    ];
  })();

  // Sections are JSX in TSX; keep them simple but consistent with your existing topic pages.
  const sections = (() => {
    const mkSection = (h2, paragraphs) => ({
      h2,
      content: paragraphs,
    });

    if (focus === 'payroll') {
      return [
        mkSection(`What Is “${q}” for Restaurant Owners?`, `
          <>
            <p>“${q}” usually describes payroll timing gaps: labor is due on a schedule, while revenue arrives unevenly. This mismatch creates pressure even when the restaurant is doing well overall.</p>
            <p>Owners typically search this term to understand what’s causing the cash shortfall and what to do next—before payday becomes the deadline.</p>
          </>
        `),
        mkSection(`How Restaurant Payroll Timing Gaps Work`, `
          <>
            <ol>
              <li><strong>Payroll hits first.</strong> Labor is scheduled weekly or biweekly.</li>
              <li><strong>Revenue arrives later.</strong> Card processing and deposits may settle on a different cadence.</li>
              <li><strong>Cash feels short.</strong> Net terms, slow sales, or uneven traffic reduce the buffer.</li>
              <li><strong>Funding bridges the gap.</strong> Many owners use restaurant working capital or cash advance-style funding to stabilize operations.</li>
            </ol>
          </>
        `),
        mkSection(`Payroll Funding vs Other Options`, `
          <>
            <p><strong>Working capital:</strong> Flexible funds for payroll float and daily operations when timing is off.</p>
            <p><strong>Cash advance:</strong> Often faster and may be structured around revenue timing.</p>
            <p><strong>Loans:</strong> Can work for longer-term capital, but approval and funding timelines may not match payday urgency.</p>
          </>
        `),
        mkSection(`Examples: When Payroll Gaps Show Up`, `
          <>
            <p><strong>Slow week before payday.</strong> A quiet Tuesday–Thursday reduces deposits before wages are due.</p>
            <p><strong>Seasonal dip.</strong> Off-season traffic falls 20–40% while fixed costs remain.</p>
            <p><strong>Unexpected repairs or taxes.</strong> A sudden expense drains reserves right before payroll.</p>
          </>
        `),
        mkSection(`Summary`, `
          <>
            <p>When “${q}” describes payroll timing gaps, the right move is early action: match funding to your payday timeline and choose an option that supports your repayment rhythm. Compare working capital and cash advance, then plan for the next gap before it becomes an emergency.</p>
            <CtaParagraph />
          </>
        `),
      ];
    }

    // Generic template for other foci (keep consistent and fast).
    return [
      mkSection(`What “${q}” Usually Means`, `
        <>
          <p>“${q}” typically describes a restaurant cash-flow pressure related to timing—when money goes out before it comes in. Owners search this term to understand the cause and find a practical path forward.</p>
          <p>This page explains the concept in plain English, then shows how restaurant funding options help stabilize operations during the delay.</p>
        </>
      `),
      mkSection(`How It Works in Real Life`, `
        <>
          <ol>
            <li><strong>Identify the gap type.</strong> Payroll, invoices, equipment, or seasonal timing.</li>
            <li><strong>Plan the timing window.</strong> Estimate how long cash will be short.</li>
            <li><strong>Choose a fit.</strong> Select the funding structure that matches the gap—not just urgency.</li>
            <li><strong>Prepare documents early.</strong> Being organized can speed up decisions.</li>
          </ol>
        </>
      `),
      mkSection(`Compare Options Without Guessing`, `
        <>
          <p><strong>Working capital:</strong> Flexible funds for daily operations and timing mismatches.</p>
          <p><strong>Cash advance:</strong> Often designed for faster funding when revenue timing is tight.</p>
          <p><strong>Loans/equipment financing:</strong> Better when you need longer-term capital or equipment-specific documentation.</p>
        </>
      `),
      mkSection(`Examples Across US Markets`, `
        <>
          <p>This issue shows up nationwide. In some regions, payment processes and vendor cycles can create slower timing. In others, seasonal traffic patterns create a predictable revenue dip.</p>
          <p>Either way, owners win by matching funding to their real cash timeline and comparing repayment mechanics so the worst week is still manageable.</p>
        </>
      `),
      mkSection(`Summary`, `
        <>
          <p>If “${q}” is showing up in your business, don’t wait until cash is already gone. Use this guide to map your gap to a funding structure that fits how your restaurant operates, then take the next step with confidence.</p>
          <CtaParagraph />
        </>
      `),
    ];
  })();

  const sectionsCode = sections
    .map(
      (s) => `      {
        h2: '${escapeTsString(s.h2)}',
        content: (
          ${s.content.trim()}
        ),
      }`
    )
    .join(',\n');

  const faqCode = faqItems
    .map(
      (it) => `      { q: '${escapeTsString(it.q)}', a: '${escapeTsString(it.a)}' }`
    )
    .join(',\n');

  const today = todayYmd;

  return {
    code: `  {
    path: '${path}',
    title: '${escapeTsString(title)}',
    description: '${escapeTsString(description)}',
    h1: '${escapeTsString(h1)}',
    lead: '${escapeTsString(lead)}',
    datePublished: '${today}',
    dateModified: '${today}',
    sections: [
${sectionsCode}
    ],
    faqItems: [
${faqCode}
    ],
  }`,
    topicCount: 1,
  };
}

function todayYmd() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function extractExistingPaths(topicPagesTsxPath) {
  const src = fs.readFileSync(topicPagesTsxPath, 'utf8');
  const matches = [...src.matchAll(/path:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
  return new Set(matches);
}

function extractStaticMetaPaths(staticMetaTsPath) {
  const src = fs.readFileSync(staticMetaTsPath, 'utf8');
  // Captures keys like '/some-path': { ... }
  const matches = [...src.matchAll(/['"](\/[^'"]+)['"]\s*:/g)].map((m) => m[1]);
  return new Set(matches.filter((p) => p.startsWith('/')));
}

function main() {
  ensureDir(gscDir);

  const requestedZipArg = process.argv[2];
  const defaultLatestZip = path.join(gscDir, 'latest.zip');
  const zipArg = requestedZipArg || defaultLatestZip;

  let zipPath = path.isAbsolute(zipArg) ? zipArg : path.join(repoRoot, zipArg);

  // Convenience: if latest.zip doesn't exist but there is another ZIP in gsc/, use the newest one.
  // This lets you "paste the ZIP into gsc/" without renaming it.
  if (!fs.existsSync(zipPath)) {
    const zips = fs
      .readdirSync(gscDir)
      .filter((f) => f.toLowerCase().endsWith('.zip'))
      .map((f) => ({ name: f, full: path.join(gscDir, f), mtimeMs: fs.statSync(path.join(gscDir, f)).mtimeMs }))
      .sort((a, b) => b.mtimeMs - a.mtimeMs);

    if (zips.length) {
      zipPath = zips[0].full;
      console.log(`Using newest GSC ZIP in gsc/: ${path.basename(zipPath)}`);
    } else {
      throw new Error(`GSC zip not found at ${zipPath} and no ZIPs found in ${gscDir}.`);
    }
  }
  const extractDir = path.join(gscDir, 'latest');

  const limitIdx = process.argv.indexOf('--limit');
  const limit = limitIdx !== -1 ? Number(process.argv[limitIdx + 1] || 15) : 15;

  const dryRun = process.argv.includes('--dry-run');
  const skipBuild = process.argv.includes('--skip-build');

  const topicPagesTsxPath = path.join(repoRoot, 'src', 'data', 'topicPages.tsx');
  const pillarPagesTsxPath = path.join(repoRoot, 'src', 'data', 'pillarPages.tsx');
  const staticMetaTsPath = path.join(repoRoot, 'src', 'staticMeta.ts');

  // Prevent any generated "topic" from overlapping with existing pillar/static guides.
  const existingPaths = new Set([
    ...extractExistingPaths(topicPagesTsxPath),
    ...extractExistingPaths(pillarPagesTsxPath),
    ...extractStaticMetaPaths(staticMetaTsPath),
  ]);

  unzipIfNeeded(zipPath, extractDir);

  const queriesCsvPath = path.join(extractDir, 'Queries.csv');
  const rows = parseQueriesCsv(queriesCsvPath);
  if (!rows.length) throw new Error('No rows parsed from Queries.csv');

  const picked = pickTopics(rows, limit, existingPaths);
  if (!picked.length) {
    console.log('No new topics selected (paths already exist or impressions/position filters too strict).');
    return;
  }

  const today = todayYmd();
  const entryCodes = picked.map((t) => buildRestaurantTopicEntry(t, today).code);
  const planPath = path.join(gscDir, 'generated-restaurant-topics.json');
  fs.writeFileSync(
    planPath,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        picked: picked.map((p) => ({ path: p.path, query: p.query, impressions: p.impressions, position: p.position })),
      },
      null,
      2
    ),
    'utf8'
  );

  if (dryRun) {
    console.log(`Dry run: would add ${entryCodes.length} topic pages.`);
    console.log(`Plan written to: ${planPath}`);
    return;
  }

  const src = fs.readFileSync(topicPagesTsxPath, 'utf8');
  const getFnIdx = src.indexOf('export function getTopicPage');
  if (getFnIdx === -1) {
    throw new Error('Could not find export function getTopicPage in topicPages.tsx');
  }

  // Insert right before the closing `];` of the topicPagesConfig array.
  const arrayCloseIdx = src.lastIndexOf('];', getFnIdx);
  if (arrayCloseIdx === -1) {
    throw new Error('Could not find closing `];` for topicPagesConfig array.');
  }

  const before = src.slice(0, arrayCloseIdx);
  const after = src.slice(arrayCloseIdx);

  const insertion = entryCodes.map((c) => c.trim()).join(',\n') + ',\n';
  const updated = before + insertion + after;
  fs.writeFileSync(topicPagesTsxPath, updated, 'utf8');

  console.log(`Added ${entryCodes.length} topic page entries to topicPages.tsx.`);
  console.log(`Plan written to: ${planPath}`);

  if (!skipBuild) {
    console.log('Running npm build to regenerate sitemap and prerender...');
    execSync('npm run build', { stdio: 'inherit', cwd: repoRoot });
  } else {
    console.log('Skipping build (--skip-build).');
  }
}

main();

