import { createFileRoute } from '@tanstack/react-router';
import { BenefitsPage } from '@/components/content-pages';
import { pageHead } from '@/lib/product';
export const Route = createFileRoute('/benefits')({
  head: () => pageHead('Sentinel Honey Peak Gummies Benefits and Features | Balanced Guide', 'Explore Sentinel Honey Peak Gummies benefits and practical features, with realistic wellness expectations and clear product-information limitations.', '/benefits'),
  component: BenefitsPage,
});
