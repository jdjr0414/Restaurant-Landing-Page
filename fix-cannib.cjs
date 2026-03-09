const fs = require('fs');
let content = fs.readFileSync('src/data/blogPosts.ts', 'utf8');
const lines = content.split('\n');
const removeSlugs = [
  'restaurant-vendor-payment-trouble',
  'restaurant-cant-pay-suppliers-urgent',
  'restaurant-inventory-before-busy-season',
];
const filtered = lines.filter((line) => {
  if (line.includes("description: 'When you") && line.includes("pay suppliers on time")) return false;
  for (const slug of removeSlugs) {
    if (line.includes(`slug: '${slug}'`)) return false;
  }
  return true;
});
fs.writeFileSync('src/data/blogPosts.ts', filtered.join('\n'));
console.log('Done');
