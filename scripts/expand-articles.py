#!/usr/bin/env python3
"""Expand the 10 blog articles to 1200-1600 words each."""
import re

path = "src/data/blogContent.tsx"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# Replacements - use unique context to avoid wrong matches
replacements = [
    # 1. restaurant-refrigeration-emergency - expand cost and funding sections
    (
        """      <h2>How Much Emergency Refrigeration Repair or Replacement Costs</h2>
      <p>Repairs can run from a few hundred dollars for a simple fix to several thousand for compressor or major component work. Full walk-in cooler or freezer replacement often costs tens of thousands, depending on size and specs. Many restaurant owners don't have that cash on hand when an emergency hits.</p>
      <h2>How Restaurants Handle Unexpected Equipment Expenses</h2>
      <p>When revenue doesn't line up with a large repair or replacement bill, owners often use""",
        """      <h2>How Much Emergency Refrigeration Repair or Replacement Costs</h2>
      <p>Costs vary widely. Simple fixes—thermostats, door gaskets, defrost timers—can run $200–$800. Compressor or evaporator work often costs $2,000–$6,000 or more. Full walk-in cooler or freezer replacement typically runs $15,000–$50,000 depending on size, insulation, and refrigeration capacity. Add installation, electrical work, and any necessary permits, and the total can climb quickly.</p>
      <h3>Why Many Owners Don&apos;t Have the Cash</h3>
      <p>Restaurant margins are thin. Rent, payroll, and food costs consume most revenue. Even profitable operators often don&apos;t have tens of thousands of dollars sitting in the account for an unexpected equipment failure. That&apos;s why so many turn to <Link to="/restaurant-working-capital">restaurant working capital</Link> or a <Link to="/restaurant-cash-advance">restaurant cash advance</Link> when an emergency hits—to cover the cost without draining reserves or putting repairs on high-interest credit cards.</p>
      <h2>How Restaurants Handle Unexpected Equipment Expenses</h2>
      <p>When revenue doesn&apos;t line up with a large repair or replacement bill, owners have a few options. Some dip into personal savings or business reserves. Others put the cost on a credit card—but high rates can make that expensive over time. Many use""",
    ),
]

# Normalize apostrophes - replace curly with straight for matching
def normalize_apostrophes(s):
    return s.replace("\u2019", "'").replace("\u2018", "'")

for old, new in replacements:
    old_norm = normalize_apostrophes(old)
    if old_norm in content:
        content = content.replace(old_norm, new)
        print("Replaced refrigeration section")
    elif old in content:
        content = content.replace(old, new)
        print("Replaced refrigeration section (exact)")
    else:
        # Find partial match for debugging
        idx = content.find("How Much Emergency Refrigeration")
        if idx >= 0:
            snippet = content[idx:idx+400]
            print("Context around match:", repr(snippet[:200]))
        print("Old text not found")

with open(path, "w", encoding="utf-8") as f:
    f.write(content)
print("Done")
