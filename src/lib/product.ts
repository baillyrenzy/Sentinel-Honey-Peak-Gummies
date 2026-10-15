export const AFFILIATE_URL = 'https://taptobuynow.com/sentinel-honey-peak-gummies/';
export const DISCLOSURE = 'This website may contain affiliate links. If you purchase through these links, we may receive a commission at no additional cost to you.';
export const ingredients = [
  { name: 'L-Arginine HCl', amount: '50 mg', detail: 'An amino-acid ingredient listed on the supplied Supplement Facts panel.' },
  { name: 'Tongkat Ali', amount: '200 mg', detail: 'Eurycoma longifolia root extract, as listed on the label.' },
  { name: 'Maca root', amount: '100 mg', detail: 'Lepidium meyenii extract, as listed on the label.' },
  { name: 'Ashwagandha', amount: '100 mg', detail: 'Withania somnifera root extract, as listed on the label.' },
  { name: 'Horny goat weed', amount: '100 mg', detail: 'Epimedium extract. The small botanical wording on the supplied image is not fully legible; confirm it on your bottle.' },
  { name: 'Beet root', amount: '50 mg', detail: 'Beta vulgaris extract, as listed on the label.' },
  { name: 'Grape seed', amount: '50 mg', detail: 'Vitis vinifera extract, as listed on the label.' },
];
export const faqItems = [
  ['What Are Sentinel Honey Peak Gummies?', 'The supplied bottle identifies Sentinel Honey Peak Gummies as a dietary supplement in gummy form, with 30 gummies per bottle. This is an independent informational review, not the manufacturer’s website.'],
  ['How Do Sentinel Honey Peak Gummies Work?', 'The packaging lists a combination of amino-acid and botanical ingredients. A label alone does not demonstrate that the finished formula produces a specific result. We have not verified clinical research on this finished product.'],
  ['What Are the Sentinel Honey Peak Gummies Ingredients?', 'The supplied label lists L-Arginine HCl, Tongkat Ali, maca root, ashwagandha, horny goat weed, beet root, and grape seed extracts. It also lists sugars and other gummy ingredients. Check the Ingredients guide and your current bottle for the complete label.'],
  ['How Do You Use Sentinel Honey Peak Gummies?', 'The supplied label suggests one gummy daily with an 8 oz. glass of water, 20–30 minutes before a meal, or as directed by a healthcare professional. This is a transcription of the provided label, not personalized advice. Always follow your current product instructions.'],
  ['What Are the Potential Benefits of Sentinel Honey Peak Gummies?', 'The bottle markets energy, vitality, physical endurance, muscle function, and stress-response support. These are label claims, not independently established outcomes. Gummy format and a labeled serving size are practical features you can evaluate without assuming medical benefits.'],
  ['Where Can I Buy Sentinel Honey Peak Gummies?', 'Use the product-page link below to review current buying information. It is an affiliate destination; verify the seller, final price, return policy, and current product label before purchasing.'],
  ['Are Sentinel Honey Peak Gummies Available Online?', 'An online product-page link is provided on this site. We do not verify real-time stock or availability. Confirm those details directly with the seller before paying.'],
  ['What Should I Check Before Buying Sentinel Honey Peak Gummies?', 'Check the current ingredient label, serving size, warnings, seller identity, total cost, shipping terms, and return policy. Discuss supplement use with a qualified healthcare professional if you take medicines or have a medical condition.'],
  ['Where Can I Find the Official Product Instructions?', 'Read the directions and warnings on your actual bottle. You can also check the linked product page for current instructions and ask the seller for a readable label if anything is unclear.'],
];
export function pageHead(title: string, description: string, path: string) {
  return { meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { property: 'og:url', content: path }, { name: 'twitter:card', content: 'summary_large_image' }], links: [{ rel: 'canonical', href: path }] };
}
export function validateContact(values: Record<string, string>) {
  const errors: Record<string, string> = {};
  if (!values.name?.trim()) errors.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email ?? '')) errors.email = 'Please enter a valid email address.';
  if (!values.subject?.trim()) errors.subject = 'Please enter a subject.';
  if (!values.message?.trim()) errors.message = 'Please enter your message.';
  return errors;
}
