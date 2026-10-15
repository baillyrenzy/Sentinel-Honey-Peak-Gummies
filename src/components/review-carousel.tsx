import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Search, MessageSquare, ClipboardCheck, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
const cards = [
  { icon: Search, title: 'Look beyond the headline', text: 'Specific experiences are more useful than broad promises. Look for details about the product, time frame, and what the reviewer actually observed.', tag: 'CONTEXT MATTERS' },
  { icon: MessageSquare, title: 'Check the source', text: 'Consider where a review appears and whether the writer discloses an incentive. A verified-purchase claim should come with actual verification.', tag: 'AUTHENTICITY FIRST' },
  { icon: ClipboardCheck, title: 'Set realistic expectations', text: 'Personal experiences do not establish safety or effectiveness for everyone. Supplements are not a substitute for professional medical advice.', tag: 'INDIVIDUAL EXPERIENCES' },
  { icon: ShoppingBag, title: 'Review the buying experience', text: 'Look for clear information about seller support, the final order cost, and return terms. Check current policies rather than relying on an old review.', tag: 'BUYING CONSIDERATIONS' },
];
export function ReviewCarousel() {
  const [ref, api] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const onSelect = useCallback(() => { if (api) setSelected(api.selectedScrollSnap()); }, [api]);
  useEffect(() => { if (!api) return; onSelect(); api.on('select', onSelect); return () => { api.off('select', onSelect); }; }, [api, onSelect]);
  useEffect(() => {
    if (!api || paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => api.scrollNext(), 6500);
    return () => window.clearInterval(timer);
  }, [api, paused]);
  return <section className="review-carousel" aria-label="Editorial review evaluation cards" aria-roledescription="carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={e => { if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false); }} onKeyDown={e => { if (e.key === 'ArrowRight') { e.preventDefault(); api?.scrollNext(); } if (e.key === 'ArrowLeft') { e.preventDefault(); api?.scrollPrev(); } }}><p className="editorial-label">EDITORIAL GUIDANCE · NOT CUSTOMER TESTIMONIALS</p><div className="carousel-viewport" ref={ref}><div className="carousel-track">{cards.map(c => <article className="carousel-slide" key={c.title}><div className="review-card"><c.icon size={26} strokeWidth={1.5} /><h3>{c.title}</h3><p>{c.text}</p><span>{c.tag}</span></div></article>)}</div></div><div className="carousel-controls"><div className="carousel-dots">{cards.map((c, i) => <Button key={c.title} variant="ghost" className={`carousel-dot ${selected === i ? 'selected' : ''}`} aria-label={`Show review guidance ${i + 1}`} aria-pressed={selected === i} onClick={() => api?.scrollTo(i)} />)}</div><div className="flex gap-2"><Button variant="outline" size="icon" aria-label="Previous review guidance" onClick={() => api?.scrollPrev()}><ArrowLeft /></Button><Button variant="outline" size="icon" aria-label="Next review guidance" onClick={() => api?.scrollNext()}><ArrowRight /></Button></div></div></section>;
}
