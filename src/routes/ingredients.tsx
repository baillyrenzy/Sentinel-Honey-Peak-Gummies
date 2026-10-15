import { createFileRoute } from '@tanstack/react-router';
import { IngredientsPage } from '@/components/content-pages';
import { pageHead } from '@/lib/product';
export const Route = createFileRoute('/ingredients')({
  head: () => pageHead('Sentinel Honey Peak Gummies Ingredients | Label Guide', 'Review Sentinel Honey Peak Gummies ingredients and listed serving amounts from the supplied label, plus safety considerations and formula limitations.', '/ingredients'),
  component: IngredientsPage,
});
