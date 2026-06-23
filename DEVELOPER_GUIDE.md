# RV Studio Developer Guide

## Project Overview

`rvstudio` is a React + Redux portfolio website for a photography studio. The codebase uses:
- React functional components
- React Router v6 for routing
- Redux Toolkit for UI state
- Tailwind CSS utility classes
- Cloudinary for image delivery
- `react-helmet-async` for SEO metadata

### Key folders

- `src/components/layout/` — shared UI layout components
- `src/components/sections/` — page content sections
- `src/components/ui/` — reusable UI utilities
- `src/pages/` — full page routes
- `src/features/` — Redux slices
- `src/redux/` — store setup
- `src/data/` — portfolio data definitions

---

## Screen-wise prompt templates

### Home screen prompt

```
Create a React home page for a photography studio that includes:
- SEO metadata using `react-helmet-async`
- a fullscreen hero slider with Cloudinary background images, text overlay, and CTA buttons
- a recent works preview section with clickable cards
- an about section with a studio image and statistics
- a services section describing photography offerings
- a contact section with an email form and inline validation
Use Tailwind CSS classes and modern minimal dark UI styling.
```

### Portfolio screen prompt

```
Build a React portfolio page that:
- loads portfolio metadata from a JSON data file
- shows category filter buttons at the top
- filters collections by selected category
- renders collection cards as links to detail pages
- uses responsive grid layout and hover styles
```

### Portfolio collection screen prompt

```
Implement a portfolio detail collection page in React with:
- a route param for collection ID
- a large image viewer with zoom, pan, and next/previous controls
- a fixed thumbnail sidebar that updates the active image
- a fallback message when the collection ID is invalid
- a back button to the portfolio screen
```

### About screen prompt

```
Create an About page for a photography studio with:
- an about section describing the studio's mission and team
- a services section repeated from the home page or reusable component
- responsive two-column layout on desktop and stacked layout on mobile
```

### Contact screen prompt

```
Create a contact page with a contact form that:
- captures name, email, phone, service, event date, and project details
- validates required fields and email format
- opens a mailto: draft with the completed details on submit
- displays a success banner after submission
```

---

## Component-wise prompt templates

### Navbar prompt

```
Build a responsive React navbar with:
- site branding/logo on the left
- route links for Home, Portfolio, About, Contact
- a Book a Session CTA button
- a hamburger toggle menu on mobile/tablet
- a sticky top layout with reduced padding on scroll
- body scroll locking while the mobile menu is open
- automatic menu close on route navigation
```

### Footer prompt

```
Create a footer component with:
- branded studio name
- link groups for page anchors
- social icons and external links
- copyright text
```

### HeroSlider prompt

```
Implement a hero slider component that:
- cycles through slide objects automatically every 5 seconds
- pauses auto-advance on hover
- shows image backgrounds via Cloudinary
- overlays headline text, subtext, and CTA buttons
- includes navigation dot controls
```

### RecentWorks prompt

```
Create a recent works section with a list of photography cards that:
- show a title, category, and cover image
- use Cloudinary image component for lazy loading
- feature hover and responsive layout styling
```

### AboutSection prompt

```
Build an about section with:
- a studio image and caption tag
- mission copy and company statistics
- a call-to-action link to contact page
```

### ServicesSection prompt

```
Create a services grid component showing:
- service cards with numbers, title, and description
- responsive card layout
- consistent typography and spacing
```

### ContactSection prompt

```
Build a contact form section that:
- uses useState for form data and errors
- validates required fields
- builds a mailto: link with subject/body
- shows a success alert on submission
- supports device-friendly input layout
```

### CloudinaryImage prompt

```
Create a reusable Cloudinary image component with:
- Cloudinary client initialization from env variables
- image resize modes (`fill` or `scale`)
- auto quality and lazy loading
- blur placeholder loading
```

### SEOHead prompt

```
Implement an SEO head component using `Helmet` that:
- renders title, meta description, keywords, canonical link
- renders Open Graph and Twitter card tags
- includes LocalBusiness JSON-LD structured data
```

### WhatsAppButton prompt

```
Create a floating WhatsApp contact button with:
- FontAwesome icon
- external link to WhatsApp chat
- accessible aria labels
```

---

## Whole project prompt template

```
Create a photography studio portfolio website using React, React Router, Redux Toolkit, Tailwind CSS, Cloudinary, and react-helmet-async.
The app should include:
- responsive layout with navbar, footer, and floating WhatsApp button
- home page with hero slider, recent works, about, services, and contact sections
- portfolio list page with category filters
- portfolio collection detail page with image viewer and thumbnails
- about and contact routes
- Redux state slice for nav scroll and mobile menu state
- reusable Cloudinary image component
- SEO metadata per page
Keep the design dark, modern, and photography-focused.
```

---

## Commenting guidance for developers

### When to add comments
- add a short file header explaining the component responsibility
- annotate complex hooks or effect behavior
- explain non-obvious layout or accessibility decisions
- document helper functions and validation logic
- keep comments concise and useful

### Example comment patterns

```jsx
// load portfolio categories and memoize filtered collections
const filteredCollections = useMemo(() => {
  return activeCategory === 'all'
    ? portfolioData.collections
    : portfolioData.collections.filter(collection => collection.category === activeCategory);
}, [activeCategory]);
```

```jsx
// prevent page scroll while mobile menu is open
useEffect(() => {
  document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
  return () => { document.body.style.overflow = ''; };
}, [mobileMenuOpen]);
```

---

## File summary

- `src/App.jsx` — application shell, router, Redux provider
- `src/redux/store.js` — store configuration
- `src/features/ui/uiSlice.js` — UI state for navbar and lightbox
- `src/components/layout/NavBar.jsx` — responsive nav and mobile menu
- `src/components/layout/Footer.jsx` — site footer links
- `src/components/ui/CloudinaryImage.jsx` — Cloudinary image loader
- `src/components/ui/SEOHead.jsx` — SEO metadata head
- `src/components/ui/WhatsAppButton.jsx` — floating WhatsApp CTA
- `src/pages/Home.jsx` — home page assembly
- `src/pages/Portfolio.jsx` — portfolio listing page
- `src/pages/PortfolioCollection.jsx` — collection viewer page
- `src/pages/AboutUs.jsx` — about route wrapper
- `src/pages/Contact.jsx` — contact route wrapper
- `src/components/sections/*` — reusable landing page sections

---

## How to use this guide

1. Read the file summary first to understand responsibilities.
2. Use the prompt templates to generate new screens or components.
3. Match comments to important logic blocks, especially hooks and dynamic rendering.
4. Keep route/feature files simple: page container should orchestrate components, not contain too much logic.
