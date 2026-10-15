import { Link, useLocation } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight, ArrowRight, Mountain, Menu, X, Leaf, BookOpen, ShieldCheck, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AFFILIATE_URL, DISCLOSURE } from '@/lib/product';
import product from '@/assets/sentinel-product.webp.asset.json';
import label from '@/assets/sentinel-label.webp.asset.json';
import pair from '@/assets/sentinel-pair.webp.asset.json';
import trio from '@/assets/sentinel-trio.webp.asset.json';
import type { ReactNode } from 'react';
const links = [{ to: '/', name: 'Home' }, { to: '/reviews', name: 'Reviews' }, { to: '/benefits', name: 'Benefits' }, { to: '/ingredients', name: 'Ingredients' }, { to: '/how-it-works', name: 'How It Works' }, { to: '/faq', name: 'FAQ' }, { to: '/contact', name: 'Contact' }] as const;
export function AffiliateCTA({ children = 'Visit Official Website', className = '' }: { children?: ReactNode; className?: string }) {
  return <Button asChild size="lg" className={`affiliate-button ${className}`}><a href={AFFILIATE_URL} target="_blank" rel="sponsored noopener noreferrer">{children}<ArrowUpRight aria-hidden="true" /></a></Button>;
}
export function Disclosure() { return <p className="affiliate-disclosure">{DISCLOSURE} <Link to="/disclaimer">Read our disclosure.</Link></p>; }
export function ProductImage({ variant = 'product', hero = false, className = '' }: { variant?: 'product' | 'label' | 'pair' | 'trio'; hero?: boolean; className?: string }) {
  const assets = { product, label, pair, trio };
  const dimensions = { product: [896, 1200], label: [1584, 672], pair: [1122, 1402], trio: [1254, 1254] };
  const size = dimensions[variant];
  return <a className={`product-image-link ${hero ? 'hero-product' : ''} ${className}`} href={AFFILIATE_URL} target="_blank" rel="sponsored noopener noreferrer" aria-label="View Sentinel Honey Peak Gummies product information (affiliate link)"><img src={assets[variant].url} width={size[0]} height={size[1]} alt={variant === 'label' ? 'Sentinel Honey Peak Gummies ingredients and supplied Supplement Facts label' : `Sentinel Honey Peak Gummies ${variant === 'product' ? 'supplement bottle, 30 gummies' : 'product packaging'}`} loading={hero ? 'eager' : 'lazy'} fetchPriority={hero ? 'high' : 'auto'} /></a>;
}
export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  return <><div className="top-note"><span>INDEPENDENT PRODUCT REVIEW</span><span>Informed choices. Realistic expectations.</span></div><header className="site-header"><div className="container header-inner"><Link to="/" className="brand" aria-label="Sentinel Honey Peak review home"><Mountain strokeWidth={1.5} /><span>SENTINEL<span className="brand-sub">HONEY PEAK REVIEW</span></span></Link><nav className="desktop-nav" aria-label="Main navigation">{links.map(link => <Link key={link.to} to={link.to} activeOptions={{ exact: true }} activeProps={{ className: 'nav-active' }}>{link.name}</Link>)}</nav><div className="header-actions"><AffiliateCTA /><Button variant="ghost" size="icon" className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div></div>{open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{links.map(link => <Link key={link.to} to={link.to} onClick={() => setOpen(false)} aria-current={pathname === link.to ? 'page' : undefined}>{link.name}</Link>)}<AffiliateCTA /></nav>}</header></>;
}
export function Footer() { return <footer className="site-footer"><div className="container footer-grid"><div><Link to="/" className="brand"><Mountain /><span>SENTINEL<span className="brand-sub">HONEY PEAK REVIEW</span></span></Link><p>An independent, label-informed look at Sentinel Honey Peak Gummies. Better information for a more considered choice.</p></div><div><h3>Explore the product</h3>{links.slice(1, 5).map(l => <Link key={l.to} to={l.to}>{l.name}</Link>)}</div><div><h3>Helpful information</h3><Link to="/faq">Frequently asked questions</Link><Link to="/contact">Contact</Link><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms">Terms & Conditions</Link><Link to="/disclaimer">Disclaimer</Link></div></div><div className="container footer-bottom"><Disclosure /><p>© 2026 Sentinel Honey Peak Review. Independent affiliate publication. Not affiliated with the manufacturer. Product statements have not been independently clinically verified. This content is not medical advice.</p></div></footer>; }
export function FinalCTA() { return <section className="final-cta"><div className="container"><span className="eyebrow">YOUR NEXT STEP</span><h2>Make an informed choice.<br />Start with the product details.</h2><p>Explore available information, check the current label, and review important buying considerations before purchasing.</p><AffiliateCTA>Learn More About Sentinel Honey Peak Gummies</AffiliateCTA><Disclosure /></div></section>; }
export function PageHeading({ title, eyebrow = 'THE INDEPENDENT GUIDE', intro }: { title: string; eyebrow?: string; intro: string }) { return <section className="page-heading"><div className="container"><div className="breadcrumbs"><Link to="/">Home</Link><ChevronRight size={14} /><span>{eyebrow === 'THE INDEPENDENT GUIDE' ? 'Product guide' : eyebrow.toLowerCase()}</span></div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{intro}</p></div></section>; }
export function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) { return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{children && <p>{children}</p>}</div>; }
export function TextLink({ to, children }: { to: typeof links[number]['to']; children: ReactNode }) { return <Link to={to} className="text-link">{children}<ArrowRight size={17} /></Link>; }
export function EvidenceNote() { return <div className="evidence-note"><ShieldCheck size={22} /><div><strong>A note on our sources</strong><p>This guide uses the product images and label supplied for this website. The label image says “Sentinel Peak Gelatin,” while the bottle says “Sentinel Honey Peak Gummies.” Confirm that the current seller’s formula matches your bottle before relying on these details.</p></div></div>; }
export const featureCards = [
  { icon: Leaf, title: 'Daily Wellness Routine', text: 'Consider where a supplement fits alongside balanced nutrition, movement, and rest.' },
  { icon: BookOpen, title: 'Convenient Gummy Format', text: 'A gummy presentation with 30 gummies per bottle, as shown on the supplied packaging.' },
  { icon: ShieldCheck, title: 'Ingredient Transparency', text: 'Understand the label, listed serving amounts, and warnings before making a choice.' },
  { icon: Mountain, title: 'Lifestyle Compatibility', text: 'Take a realistic look at your needs, preferences, and existing daily habits.' },
];
export function Features() { return <div className="feature-grid">{featureCards.map((f, i) => <article className="feature-card" key={f.title}><span className="feature-number">0{i + 1}</span><f.icon className="feature-icon" strokeWidth={1.5} /><h3>{f.title}</h3><p>{f.text}</p></article>)}</div>; }
