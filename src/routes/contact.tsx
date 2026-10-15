import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '@/components/content-pages';
import { pageHead } from '@/lib/product';
export const Route = createFileRoute('/contact')({
  head: () => pageHead('Contact | Sentinel Honey Peak Review', 'View contact information for Sentinel Honey Peak Review and try the clearly labeled demonstration inquiry form. Messages are not delivered.', '/contact'),
  component: ContactPage,
});
