/**
 * Count approximate word count (visible body text) for each pain-point page.
 * Run: node scripts/count-page-words.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const root = path.join(__dirname, '..');
const pagesDir = path.join(root, 'src', 'pages');

const painPages = [
  'BusyButBrokeRestaurantPage.tsx',
  'FirstYearCashFlowSurprisesPage.tsx',
  'CantMakeRestaurantPayrollPage.tsx',
  'BehindOnVendorPaymentsPage.tsx',
  'RestaurantEquipmentBrokePage.tsx',
  'RestaurantLaborScheduleMoneyDrainsPage.tsx',
  'RestaurantSlowSeasonPage.tsx',
  'RestaurantLeaseTooExpensivePage.tsx',
  'MaxedOutCreditCardsRestaurantPage.tsx',
  'RestaurantDeliveryAppFeesPage.tsx',
  'RestaurantRecordSalesNoProfitPage.tsx',
  'RestaurantDiscountingHurtingProfitsPage.tsx',
  'RestaurantBookkeepingBadNewsPage.tsx',
  'RestaurantPartnerMoneyProblemsPage.tsx',
  'RestaurantMenuEngineeringPage.tsx',
  'RestaurantManagerQuitPage.tsx',
  'RestaurantBarProfitableNotPage.tsx',
  'RestaurantProfitableOnPaperNoCashPage.tsx',
  'RestaurantTaxBillCantPayPage.tsx',
  'OpeningSecondRestaurantPage.tsx',
];

function countWords(str) {
  if (!str || typeof str !== 'string') return 0;
  return str.replace(/\s+/g, ' ').trim().split(/\s+/).filter(Boolean).length;
}

function extractBodyText(content) {
  // Remove imports
  let s = content.replace(/import\s+[\s\S]*?from\s+['"][^'"]+['"];?\s*/g, '');
  // Extract text from JSX: content between > and < (may include newlines), and from template literals
  const chunks = [];
  const tagText = [...s.matchAll(/>\s*([\s\S]*?)\s*</g)];
  for (const m of tagText) {
    const inner = m[1]
      .replace(/\{[\s\S]*?\}/g, ' ') // remove JSX expressions but leave space
      .replace(/<[^>]+>/g, ' ')
      .trim();
    if (inner.length > 15) chunks.push(inner);
  }
  // Also get long string literals (e.g. in <p> or title)
  const strings = [...s.matchAll(/['"`]([^'"`]{40,})['"`]/g)].map((m) => m[1]);
  return chunks.join(' ') + ' ' + strings.join(' ');
}

const results = [];
for (const file of painPages) {
  const fullPath = path.join(pagesDir, file);
  const content = fs.readFileSync(fullPath, 'utf8');
  const text = extractBodyText(content);
  const n = countWords(text);
  const slug = file
    .replace('Page.tsx', '')
    .replace(/([A-Z])/g, (m) => m.toLowerCase())
    .replace(/^restaurant/, '/restaurant-')
    .replace(/^behind/, '/behind-')
    .replace(/^cant/, '/cant-')
    .replace(/^opening/, '/opening-')
    .replace(/^maxed/, '/maxed-')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
  results.push({ file: file.replace('Page.tsx', ''), words: n });
}

results.forEach((r) => console.log(`${r.file}: ${r.words}`));
console.log('---');
console.log(`Total: ${results.reduce((a, b) => a + b.words, 0)}`);
console.log(`Min: ${Math.min(...results.map((r) => r.words))}, Max: ${Math.max(...results.map((r) => r.words))}, Avg: ${(results.reduce((a, b) => a + b.words, 0) / results.length).toFixed(0)}`);
