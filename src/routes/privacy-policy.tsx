import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '@/components/content-pages';
import { pageHead } from '@/lib/product';
export const Route = createFileRoute('/privacy-policy')({
  head: () => pageHead('Privacy Policy | Sentinel Honey Peak Review', 'Read the draft privacy policy for Sentinel Honey Peak Review, including demonstration form handling, affiliate destinations, and external resources.', '/privacy-policy'),
  component: () => <LegalPage kind="privacy" />,
});
