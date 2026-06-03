export type Category = {
  slug: string;
  name: string;
  kicker: string;
  title: string;
  description: string;
  evidence: string;
  claimRisk: string;
  whoItsFor: string[];
  skipIf: string[];
  whatToLookFor: string[];
  scoring: { label: string; note: string }[];
  productShortlist: { name: string; positioning: string; why: string; watchout: string }[];
};

export const categories: Category[] = [
  {
    slug: 'creatine',
    name: 'Creatine',
    kicker: 'Strength + performance',
    title: 'Best creatine supplements for beginners',
    description: 'Creatine is one of the simplest first supplements to evaluate: strong evidence, low complexity, and plenty of brands trying to make it more confusing than it needs to be.',
    evidence: 'High evidence',
    claimRisk: 'Low claim risk when positioned for strength, power, and training support.',
    whoItsFor: ['Beginners building a gym routine', 'Women and men who want simple performance support', 'People who prefer boring, well-studied basics'],
    skipIf: ['A clinician has told you to avoid creatine', 'You dislike daily powder routines', 'A product hides the dose in a proprietary blend'],
    whatToLookFor: ['Creatine monohydrate as the main ingredient', '3–5g serving size', 'Third-party testing or clear quality documentation', 'Low price per effective serving', 'No “advanced matrix” fluff required'],
    scoring: [
      { label: 'Ingredient form', note: 'Monohydrate wins unless a brand gives a compelling reason otherwise.' },
      { label: 'Dose clarity', note: 'Full serving dose should be obvious without label math.' },
      { label: 'Testing signal', note: 'NSF, Informed Choice, USP, COA access, or credible in-house QA.' },
      { label: 'Value', note: 'Compare price per 5g effective serving, not tub size.' }
    ],
    productShortlist: [
      { name: 'Transparent single-ingredient powder', positioning: 'Best default', why: 'No flavor system, no blend, easy to dose.', watchout: 'Confirm scoop size matches grams.' },
      { name: 'Capsule creatine', positioning: 'Best for travel', why: 'Portable and low mess.', watchout: 'Often requires many capsules for a full dose.' },
      { name: 'Flavored creatine', positioning: 'Best for taste compliance', why: 'Helpful if plain powder makes you skip doses.', watchout: 'Check sweeteners, dyes, and serving cost.' }
    ]
  },
  {
    slug: 'magnesium',
    name: 'Magnesium',
    kicker: 'Sleep + relaxation',
    title: 'Best magnesium for sleep support',
    description: 'Magnesium is not a sleeping pill. The right product should explain the form, dose, and realistic use case without promising knockout sleep.',
    evidence: 'Moderate evidence',
    claimRisk: 'Medium claim risk because brands often overstate sleep and stress claims.',
    whoItsFor: ['People optimizing evening routines', 'Those comparing glycinate, citrate, malate, and threonate', 'Anyone who wants label clarity before buying'],
    skipIf: ['You have kidney disease or medication interactions without clinician guidance', 'The product makes disease-treatment claims', 'The label hides elemental magnesium amount'],
    whatToLookFor: ['Magnesium form clearly stated', 'Elemental magnesium amount disclosed', 'Conservative sleep language', 'No giant proprietary relaxation blend', 'Digestive tolerance notes'],
    scoring: [
      { label: 'Form transparency', note: 'Glycinate is common for evening routines; citrate may be more digestive-active.' },
      { label: 'Elemental dose', note: 'Labels should not force you to guess the actual magnesium amount.' },
      { label: 'Claim discipline', note: 'Prefer “supports relaxation” over miracle sleep claims.' },
      { label: 'Tolerance', note: 'Products should make it easy to start low.' }
    ],
    productShortlist: [
      { name: 'Magnesium glycinate capsules', positioning: 'Best evening default', why: 'Simple, common, and usually easy to dose.', watchout: 'Some products blend multiple forms without clear reason.' },
      { name: 'Magnesium citrate powder', positioning: 'Best budget option', why: 'Affordable and widely available.', watchout: 'May be more likely to affect digestion.' },
      { name: 'Magnesium threonate', positioning: 'Premium niche', why: 'Often marketed for cognitive support.', watchout: 'High price and more aggressive claims.' }
    ]
  },
  {
    slug: 'electrolytes',
    name: 'Electrolytes',
    kicker: 'Hydration',
    title: 'Best electrolyte powders without the wellness theater',
    description: 'Electrolytes should match use case: sweat, heat, training, low-carb diets, or simple hydration preference. More ingredients is not automatically better.',
    evidence: 'Use-case dependent',
    claimRisk: 'Medium claim risk when everyday hydration claims are exaggerated.',
    whoItsFor: ['Heavy sweaters and outdoor workers', 'Athletes or active people training in heat', 'People comparing sugar, sodium, and sweetener tradeoffs'],
    skipIf: ['You need sodium restriction', 'You rarely sweat and already eat enough sodium', 'The product claims to detox, cure fatigue, or hack metabolism'],
    whatToLookFor: ['Sodium amount per serving', 'Potassium and magnesium context', 'Sugar level matched to use case', 'Clear sweetener disclosure', 'Cost per serving'],
    scoring: [
      { label: 'Sodium fit', note: 'Higher sodium can make sense for sweat; it is not automatically better for everyone.' },
      { label: 'Sugar logic', note: 'Sugar can help during endurance use, but may be unnecessary for casual sipping.' },
      { label: 'Flavor compliance', note: 'Taste matters if it replaces skipped hydration.' },
      { label: 'Ingredient restraint', note: 'Avoid fairy-dust adaptogen stacks unless they are central to the product.' }
    ],
    productShortlist: [
      { name: 'High-sodium stick pack', positioning: 'Best for sweat-heavy days', why: 'Clear purpose and easy portability.', watchout: 'Not ideal for sodium-restricted users.' },
      { name: 'Low-sugar daily electrolyte', positioning: 'Best daily option', why: 'Good for people avoiding sugary drinks.', watchout: 'Check whether sodium is too low to matter.' },
      { name: 'Carb + electrolyte mix', positioning: 'Best endurance option', why: 'Better fit for longer training sessions.', watchout: 'Overkill for casual hydration.' }
    ]
  },
  {
    slug: 'collagen',
    name: 'Collagen',
    kicker: 'Skin + joints',
    title: 'Best collagen peptides with realistic expectations',
    description: 'Collagen can be useful, but the marketing gets glossy fast. A good guide separates protein convenience from skin, joint, and beauty claims.',
    evidence: 'Moderate evidence',
    claimRisk: 'Medium to high claim risk depending on beauty and anti-aging language.',
    whoItsFor: ['People adding protein to coffee or smoothies', 'Users comparing bovine, marine, and flavored powders', 'Anyone who wants beauty claims translated into plain English'],
    skipIf: ['You need a complete protein source', 'You avoid animal-derived products', 'The product implies dramatic anti-aging results'],
    whatToLookFor: ['Collagen type/source disclosed', 'Protein grams per serving', 'No unrealistic before/after claims', 'Third-party testing where possible', 'Price per 10g collagen serving'],
    scoring: [
      { label: 'Source clarity', note: 'Bovine, marine, chicken, or multi-source should be obvious.' },
      { label: 'Serving usefulness', note: 'Compare against a 10g practical serving, not tiny scoop claims.' },
      { label: 'Claim restraint', note: 'Support language beats dramatic beauty promises.' },
      { label: 'Mixability', note: 'A product that clumps is a product people quit.' }
    ],
    productShortlist: [
      { name: 'Unflavored bovine collagen', positioning: 'Best everyday default', why: 'Easy to add to coffee or smoothies.', watchout: 'Not a complete protein replacement.' },
      { name: 'Marine collagen', positioning: 'Best pescatarian-friendly option', why: 'Popular for beauty positioning.', watchout: 'Often more expensive per serving.' },
      { name: 'Flavored collagen blend', positioning: 'Best treat-like compliance', why: 'Taste may drive consistency.', watchout: 'Watch sugar, gums, and claim stacking.' }
    ]
  },
  {
    slug: 'protein-powder',
    name: 'Protein powder',
    kicker: 'Daily nutrition',
    title: 'Best protein powders for simple daily routines',
    description: 'Protein powder is food convenience, not magic. The best product depends on tolerance, taste, ingredient preferences, and cost per useful serving.',
    evidence: 'High evidence for protein adequacy',
    claimRisk: 'Low to medium claim risk unless brands overpromise weight loss or transformation outcomes.',
    whoItsFor: ['Busy people who miss protein targets', 'Beginners comparing whey, plant, and isolate options', 'People who want fewer additives and better taste'],
    skipIf: ['You already hit protein targets comfortably', 'You react poorly to dairy and choose whey without testing tolerance', 'A product markets unrealistic body-transformation outcomes'],
    whatToLookFor: ['Protein grams per serving', 'Protein source and amino acid completeness', 'Third-party testing when possible', 'Sweeteners and digestive ingredients', 'Cost per 25g protein'],
    scoring: [
      { label: 'Protein quality', note: 'Whey is efficient; plant blends can work if formulated well.' },
      { label: 'Digestive tolerance', note: 'Isolate, enzymes, or plant options may matter more than hype.' },
      { label: 'Taste and texture', note: 'Repeat use depends on this more than people admit.' },
      { label: 'Price per protein', note: 'Normalize cost to a 25g protein serving.' }
    ],
    productShortlist: [
      { name: 'Whey isolate', positioning: 'Best low-lactose dairy option', why: 'High protein density and usually mixes well.', watchout: 'Costs more than concentrate.' },
      { name: 'Whey concentrate', positioning: 'Best budget option', why: 'Good value for people who tolerate dairy.', watchout: 'May contain more lactose.' },
      { name: 'Plant protein blend', positioning: 'Best dairy-free option', why: 'Useful for vegan or dairy-free routines.', watchout: 'Texture and amino acid profile vary widely.' }
    ]
  }
];

export const checklistCriteria = [
  { score: 15, title: 'Label transparency', detail: 'Full Supplement Facts, no proprietary blend hiding meaningful active doses.' },
  { score: 15, title: 'Dose quality', detail: 'Serving size lines up with common research-informed or practical-use ranges.' },
  { score: 15, title: 'Evidence level', detail: 'Claims match the ingredient category instead of borrowing credibility from unrelated studies.' },
  { score: 15, title: 'Testing + quality signals', detail: 'Third-party testing, COAs, cGMP, contaminant testing, or credible QA documentation.' },
  { score: 10, title: 'Claim risk', detail: 'Avoids disease-treatment, miracle, detox, hormone, or transformation promises.' },
  { score: 10, title: 'Value math', detail: 'Price is compared per effective serving, not just per container.' },
  { score: 10, title: 'Fit + safety context', detail: 'Explains who should consider skipping or asking a clinician first.' },
  { score: 10, title: 'Real-world usability', detail: 'Taste, mixability, dosing convenience, and routine fit are considered.' }
];

export const guideCards = [
  { title: 'The HealthMaxxed Buyer Checklist', href: '/tools/buyer-checklist', desc: 'The reusable 100-point product filter behind every guide.', tag: 'Start here' },
  { title: 'Best creatine supplements for beginners', href: '/categories/creatine', desc: 'Transparent labels, third-party testing, price per serving, and claim discipline.', tag: 'Live' },
  { title: 'Best magnesium for sleep support', href: '/categories/magnesium', desc: 'Forms, elemental dose, tolerance, and realistic sleep-support language.', tag: 'Live' },
  { title: 'Best electrolyte powders', href: '/categories/electrolytes', desc: 'Sodium, sugar, sweeteners, use cases, and value without wellness theater.', tag: 'Live' },
  { title: 'Best collagen peptides', href: '/categories/collagen', desc: 'Beauty and joint claims translated into practical product checks.', tag: 'Live' },
  { title: 'Best protein powders', href: '/categories/protein-powder', desc: 'Whey, isolate, plant protein, taste, tolerance, and cost per useful serving.', tag: 'Live' }
];
