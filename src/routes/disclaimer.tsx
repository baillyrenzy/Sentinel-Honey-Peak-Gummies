import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '@/components/content-pages';
import { pageHead } from '@/lib/product';
export const Route = createFileRoute('/disclaimer')({
  head: () => pageHead('Affiliate and Health Disclaimer | Sentinel Honey Peak Review', 'Read our affiliate disclosure, independent review limitations, product-label cautions, and general health and medical disclaimer.', '/disclaimer'),
  component: () => <LegalPage kind="disclaimer" />,
});
