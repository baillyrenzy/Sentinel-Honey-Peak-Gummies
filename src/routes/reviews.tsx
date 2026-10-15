import { createFileRoute } from '@tanstack/react-router';
import { ReviewsPage } from '@/components/content-pages';
import { pageHead } from '@/lib/product';
export const Route = createFileRoute('/reviews')({
  head: () => pageHead('Sentinel Honey Peak Gummies Reviews 2026 | Independent Guide', 'Explore our label-informed Sentinel Honey Peak Gummies review, ingredient transparency, customer-feedback considerations, and buying guide.', '/reviews'),
  component: ReviewsPage,
});
