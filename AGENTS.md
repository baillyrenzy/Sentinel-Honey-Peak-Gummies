<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application structure
- The root shell renders the affiliate waiting screen and declares the timed redirect in head metadata; retained content routes keep their individual metadata for consistent direct URLs.
- Use TanStack file routes for every public page and route-local head metadata; shared navigation and footer live in the root shell so direct navigation remains consistent.
- Keep affiliate destinations, label transcriptions, and contact validation in a shared browser-safe product module to make content rules consistent and testable.
- Render supplied media through CDN asset pointers and the shared linked ProductImage component so proportions, loading behavior, and affiliate attribution stay consistent.
- Use Embla for the editorial guidance carousel and Radix for FAQ accordions to preserve established touch and keyboard behavior.
- Keep contact validation browser-only until delivery is explicitly requested; this avoids implying that messages are sent.
- Legal pages remain marked drafts until real operator details are supplied; defer a new sitemap until a production domain is configured.
