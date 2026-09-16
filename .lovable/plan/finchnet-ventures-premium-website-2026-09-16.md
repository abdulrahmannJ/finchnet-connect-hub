# Finchnet Ventures Premium Website

## Goal
Build a polished, frontend-only telecommunications website that feels credible to residential customers, property managers, and business clients. The four supplied photos will anchor the visual story across residential internet, technical installation, infrastructure, and communications pages.

## Pages and navigation
- Home
- Internet Packages
- Services
- Residential Internet
- Network Infrastructure Design
- Network Security
- Unified Communications
- About Us
- Coverage
- Contact / Request a Quote
- Privacy Policy
- Terms of Service

Every page will use the same responsive header, mobile menu, footer, visual language, and working navigation. Each route will receive unique search/social titles and descriptions.

## Visual direction
- Use the supplied palette exactly: deep navy and navy foundations, electric blue actions, restrained cyan details, crisp white and light-blue surfaces, and high-contrast text.
- Use **Manrope** for clear, modern typography with strong headings and comfortable reading sizes.
- Create a custom geometric connectivity mark with the stacked **FINCHNET / VENTURES** wordmark, then derive a matching favicon.
- Use squared, premium layouts with modest corner radii, fine borders, generous spacing, and subtle network-line details rather than decorative gradients.
- Use the supplied apartment image as the homepage’s immersive first-screen background, with the other supplied images placed in relevant technical, residential, and communications sections.
- Keep motion restrained: navigation transitions, package emphasis, and a few purposeful content reveals, with reduced-motion support.

## Homepage
- Full-image opening section with the specified eyebrow, headline, supporting copy, two calls to action, speed strip, and three trust points.
- Four editable package cards, with one configurable recommended plan and visibly unconfirmed pricing.
- Nine-service overview with distinct icons and relevant links.
- “Why Finchnet Ventures” image-led section using only supportable claims.
- Residential connectivity story and package call to action.
- Dark infrastructure quote banner and complete shared footer.

## Packages and enquiries
- Store package names, speeds, descriptions, placeholder prices, features, installation notes, and recommendation status in one editable data module.
- Build the full pricing page, responsive comparison table, installation process, and package enquiry form.
- Clearly label all unknown commercial details as “To be confirmed.”
- Validate forms in the browser, show specific error messages, and provide an honest demo confirmation stating that no enquiry was delivered because no backend is connected.

## Service content
- Build a rich Services overview covering all nine requested service categories with benefits, applications, imagery/icons, and quote links.
- Build focused pages for Residential Internet, Network Infrastructure Design, Network Security, and Unified Communications, including their requested processes and subsections.
- Route relevant service cards to their dedicated page; supporting services remain detailed on the Services page.
- Avoid unsupported brands, guarantees, certifications, statistics, and technical claims.

## Company, coverage, and legal pages
- About page with mission, capabilities, customer approach, installation standards, tailored solutions, and clearly editable company placeholders.
- Coverage page with an availability enquiry form and no invented coverage claims or locations.
- Contact page with all requested fields, conditional unit/package fields where relevant, validation, demo submission state, configurable contact placeholders, and a non-fabricated location panel.
- Professional Privacy Policy and Terms pages written for a frontend demonstration, clearly avoiding invented company-specific legal details.

## Responsive and quality checks
- Design mobile-first for the current 390 × 844 preview, then refine tablet and wide desktop layouts.
- Prevent horizontal overflow; keep navigation, package cards, comparison tables, forms, and call-to-action sections usable at every width.
- Use semantic headings, labels, keyboard-friendly controls, visible focus states, useful alt text, and accessible contrast.
- Lazy-load below-the-fold imagery and reserve image dimensions to reduce layout movement.
- Verify every link, mobile menu, form state, and major page visually in the running preview.

## Technical details
- React 19, TypeScript, TanStack Router, and Tailwind CSS v4.
- Reusable site shell, page header, package card, service card, process steps, CTA, and form-field components.
- Central editable content modules for packages, services, company/contact placeholders, and future coverage entries; structured so a CMS can replace them later without building an admin dashboard now.
- Upload the supplied photos through the project asset system and reference the resulting optimized delivery URLs.
- Use a lightweight inline vector for the logo mark and a real optimized favicon file.
- Frontend only: no database, authentication, email, CRM, map, or enquiry delivery integration.
