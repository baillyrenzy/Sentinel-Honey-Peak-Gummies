import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '@/components/content-pages';
import { pageHead } from '@/lib/product';
export const Route = createFileRoute('/terms')({
  head: () => pageHead('Terms and Conditions | Sentinel Honey Peak Review', 'Review draft website terms covering independent informational content, affiliate links, third-party websites, and legal customization requirements.', '/terms'),
  component: () => <LegalPage kind="terms" />,
});
