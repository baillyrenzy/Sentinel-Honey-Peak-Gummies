import { createFileRoute } from '@tanstack/react-router';
import { FAQPage } from '@/components/content-pages';
import { pageHead } from '@/lib/product';
export const Route = createFileRoute('/faq')({
  head: () => pageHead('Sentinel Honey Peak Gummies FAQ | Product and Buying Questions', 'Find answers to Sentinel Honey Peak Gummies questions about ingredients, use, label claims, online buying, and product instructions.', '/faq'),
  component: FAQPage,
});
