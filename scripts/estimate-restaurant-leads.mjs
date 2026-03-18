import fs from 'fs';

function parseCsvLine(line) {
  const out = [];
  let cur = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
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
  return out;
}

function isBrandQuery(q) {
  const s = q.toLowerCase();
  return (
    s.includes('therestaurantownersguide.com') ||
    s.includes('restaurant owners guide') ||
    s.includes('axiantpartners')
  );
}

function main() {
  const csvPath = 'gsc/latest/Queries.csv';
  if (!fs.existsSync(csvPath)) {
    console.error(`Missing: ${csvPath}`);
    process.exit(1);
  }

  const raw = fs.readFileSync(csvPath, 'utf8');
  const lines = raw.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length < 2) {
    console.error('Queries.csv has no data rows.');
    process.exit(1);
  }

  const headers = parseCsvLine(lines[0]);
  const qI = headers.findIndex((h) => /Query|Top queries/i.test(h));
  const impI = headers.findIndex((h) => /Impressions/i.test(h));
  const posI = headers.findIndex((h) => /Position/i.test(h));
  const ctrI = headers.findIndex((h) => /CTR/i.test(h));

  if ([qI, impI, posI, ctrI].some((i) => i === -1)) {
    console.error('Could not find expected columns in Queries.csv.', { headers });
    process.exit(1);
  }

  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = parseCsvLine(lines[i]);
    if (cols.length <= Math.max(qI, impI, posI, ctrI)) continue;

    const query = (cols[qI] || '').trim();
    if (!query || isBrandQuery(query)) continue;

    const impressions = Number((cols[impI] || '0').trim()) || 0;
    const position = Number((cols[posI] || '0').trim()) || 0;
    const ctrStr = (cols[ctrI] || '0').trim();
    const ctr = ctrStr.endsWith('%') ? Number(ctrStr.slice(0, -1)) : Number(ctrStr) || 0;

    if (impressions < 3) continue;
    if (position < 1 || position > 40) continue;

    rows.push({ query, impressions, position, ctr });
  }

  rows.sort((a, b) => {
    const d = b.impressions - a.impressions;
    if (d !== 0) return d;
    return Math.abs(a.position - 20) - Math.abs(b.position - 20);
  });

  const top = rows.slice(0, 15);
  const totalImp = top.reduce((s, r) => s + r.impressions, 0);
  const expectedClicks = top.reduce((s, r) => s + r.impressions * (r.ctr / 100), 0);

  console.log(`Top ${top.length} topics estimate`);
  console.log(`Total impressions (sum): ${totalImp}`);
  console.log(`Expected clicks (impressions * CTR): ${expectedClicks.toFixed(2)}`);
  console.log('');
  console.table(top.map((r) => ({ query: r.query, impressions: r.impressions, position: r.position, ctr_pct: r.ctr })));

  console.log('');
  console.log('Lead estimate requires a conversion rate.');
  console.log('Formula: leads = expectedClicks * leadConversionRate');
  console.log('Example: if 1% of clicks become leads => leads ≈ expectedClicks * 0.01');
}

main();

