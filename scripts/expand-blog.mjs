import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentPath = path.join(__dirname, '../src/data/blogContent.tsx');
let content = fs.readFileSync(contentPath, 'utf8');

// Use a unique substring to find and replace - avoid apostrophe issues
const markers = [
  {
    find: 'Repairs can run from a few hundred dollars for a simple fix to several thousand for compressor or major component work.',
    replace: 'Costs vary widely. Simple fixes—thermostats, door gaskets, defrost timers—can run $200–$800. Compressor or evaporator work often costs $2,000–$6,000 or more. Full walk-in cooler or freezer replacement typically runs $15,000–$50,000 depending on size, insulation, and refrigeration capacity. Add installation, electrical work, and any necessary permits, and the total can climb quickly.'
  }
];

for (const { find, replace } of markers) {
  if (content.includes(find)) {
    content = content.replace(find, replace);
    console.log('Replaced:', find.substring(0, 50) + '...');
  }
}

// Add the h3 and extra paragraph after the cost paragraph
const costParaEnd = 'Add installation, electrical work, and any necessary permits, and the total can climb quickly.</p>';
const insertAfter = costParaEnd + '\n      <h2>How Restaurants Handle';
const insertNew = costParaEnd + '</p>\n      <h3>Why Many Owners Don&apos;t Have the Cash</h3>\n      <p>Restaurant margins are thin. Rent, payroll, and food costs consume most revenue. Even profitable operators often don&apos;t have tens of thousands of dollars sitting in the account for an unexpected equipment failure. That&apos;s why so many turn to <Link to="/restaurant-working-capital">restaurant working capital</Link> or a <Link to="/restaurant-cash-advance">restaurant cash advance</Link> when an emergency hits—to cover the cost without draining reserves or putting repairs on high-interest credit cards.</p>\n      <h2>How Restaurants Handle';

if (content.includes(insertAfter)) {
  content = content.replace(insertAfter, insertNew);
  console.log('Inserted h3 section');
}

fs.writeFileSync(contentPath, content);
console.log('Done');
