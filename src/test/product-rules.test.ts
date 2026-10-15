import { describe, expect, it } from 'vitest';
import { AFFILIATE_URL, ingredients, validateContact } from '@/lib/product';

describe('Product and form rules', () => {
  it('uses the supplied affiliate destination', () => {
    expect(AFFILIATE_URL).toBe('https://taptobuynow.com/sentinel-honey-peak-gummies/');
  });
  it('transcribes concrete amounts from the supplied label', () => {
    expect(ingredients.map(i => [i.name, i.amount])).toEqual([
      ['L-Arginine HCl', '50 mg'], ['Tongkat Ali', '200 mg'],
      ['Maca root', '100 mg'], ['Ashwagandha', '100 mg'],
      ['Horny goat weed', '100 mg'], ['Beet root', '50 mg'], ['Grape seed', '50 mg'],
    ]);
  });
  it('requires all contact fields', () => {
    expect(Object.keys(validateContact({ name: '', email: '', subject: '', message: '' }))).toEqual(['name', 'email', 'subject', 'message']);
  });
  it('rejects malformed email addresses', () => {
    expect(validateContact({ name: 'Reader', email: 'not-an-email', subject: 'Question', message: 'A question' }).email).toBeDefined();
  });
  it('accepts a complete valid inquiry', () => {
    expect(validateContact({ name: 'Reader', email: 'reader@example.com', subject: 'Question', message: 'A question' })).toEqual({});
  });
});