import { createFileRoute } from '@tanstack/react-router';
import { HowPage } from '@/components/content-pages';
import { pageHead } from '@/lib/product';
export const Route = createFileRoute('/how-it-works')({
  head: () => pageHead('How Sentinel Honey Peak Gummies Works | Usage Guide', 'Learn how to research Sentinel Honey Peak Gummies, check ingredients, and follow the directions shown on the supplied product label.', '/how-it-works'),
  component: HowPage,
});
