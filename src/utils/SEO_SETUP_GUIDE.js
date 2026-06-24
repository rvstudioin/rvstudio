/**
 * SEO Configuration Guide for RV Studio
 * 
 * This document outlines all the SEO optimizations implemented in this React portfolio website.
 */

// ═══════════════════════════════════════════════════════════
// 1. STRUCTURED DATA & SCHEMA.ORG MARKUP
// ═══════════════════════════════════════════════════════════

/**
 * Schema.org Types Implemented:
 * 
 * - ProfessionalService: Describes RV Studio as a professional photography service
 * - LocalBusiness: Business information including address and contact details
 * - Organization: Corporate identity and contact information
 * - BreadcrumbList: Navigation hierarchy for better crawling
 * - ImageObject: For portfolio image galleries
 * 
 * Benefits:
 * ✓ Improved SERP display with rich snippets
 * ✓ Better knowledge panel visibility
 * ✓ Enhanced mobile search results
 * ✓ Voice search compatibility
 */

// ═══════════════════════════════════════════════════════════
// 2. OPEN GRAPH & SOCIAL SHARING
// ═══════════════════════════════════════════════════════════

/**
 * Open Graph Tags Implemented:
 * - og:title, og:description, og:image
 * - og:url, og:type, og:site_name
 * - og:locale for regional targeting
 * - og:image dimensions (1200x630px recommended)
 * 
 * Twitter Card Tags:
 * - twitter:card = summary_large_image
 * - twitter:creator and twitter:site
 * 
 * Benefits:
 * ✓ Better sharing on social media (Facebook, Twitter, LinkedIn)
 * ✓ Customizable preview appearance
 * ✓ Increased click-through rates
 * ✓ Brand consistency across platforms
 */

// ═══════════════════════════════════════════════════════════
// 3. TECHNICAL SEO SETUP
// ═══════════════════════════════════════════════════════════

/**
 * Key Technical SEO Elements:
 * 
 * - Canonical URLs: Prevent duplicate content issues
 * - Robots.txt: Guide search engine crawlers
 * - Sitemap.xml: Comprehensive site map for indexing
 * - Mobile Responsive: Fully optimized for mobile devices
 * - Fast Load Times: Lazy loading and image optimization
 * - HTTPS/Security: Essential for SEO ranking
 * 
 * Sitemap URL: https://www.rvstudio.in/sitemap.xml
 * Robots.txt URL: https://www.rvstudio.in/robots.txt
 */

// ═══════════════════════════════════════════════════════════
// 4. HEADING HIERARCHY & SEMANTICS
// ═══════════════════════════════════════════════════════════

/**
 * Heading Structure per Page:
 * 
 * Home (/):
 *   H1: "Capturing Moments Forever" (from HeroSlider)
 *   H2: "Selected Stories" (RecentWorks)
 *   H2: "We See the Beauty in Every Moment" (AboutSection)
 *   H2: "Our Services" (ServicesSection)
 *   H2: "Let's Create Together" (ContactSection)
 * 
 * Portfolio (/portfolio):
 *   H1: "Work by Category"
 *   H2: [Category Filters - implicitly grouped]
 * 
 * Portfolio Detail (/portfolio/:collectionId):
 *   H1: [Collection Title]
 *   H2: Collection Details
 * 
 * About (/about):
 *   H1: [About page heading]
 *   H2: Service offerings
 * 
 * Contact (/contact):
 *   H1: [Contact heading]
 *   H2: Contact details
 * 
 * Best Practices:
 * ✓ Single H1 per page
 * ✓ Logical hierarchy (no skipping levels)
 * ✓ Descriptive and keyword-relevant
 * ✓ Accessible to screen readers
 */

// ═══════════════════════════════════════════════════════════
// 5. IMAGE OPTIMIZATION & ALT ATTRIBUTES
// ═══════════════════════════════════════════════════════════

/**
 * Image Optimization Strategy:
 * 
 * ✓ All images use CloudinaryImage component
 * ✓ Lazy loading enabled for performance
 * ✓ Responsive images with auto-sizing
 * ✓ WebP format with fallbacks
 * ✓ Descriptive alt text for all images
 * ✓ Image compression and optimization
 * 
 * Alt Text Examples:
 * - "Bindu & Manoj - Pre-Wedding Photography"
 * - "Portfolio collection featuring Wedding Photography"
 * - "About RV Studio"
 * 
 * Benefits:
 * ✓ Better accessibility
 * ✓ Improved image search visibility
 * ✓ SEO boost from image context
 * ✓ Better user experience
 */

// ═══════════════════════════════════════════════════════════
// 6. META TAGS & METADATA
// ═══════════════════════════════════════════════════════════

/**
 * Key Meta Tags Implemented:
 * 
 * - Title Tags: Unique and descriptive for each page
 * - Meta Description: 150-160 characters
 * - Canonical Tags: Prevent duplicate content
 * - Robots Meta: Control crawler behavior
 * - Theme Color: For browser UI customization
 * - Mobile Web App Meta: iOS-specific tags
 * - Google Search Console: Verification meta tag
 * 
 * Implementation Location:
 * - Global: index.html
 * - Per-Page: via react-helmet-async in SEOHead component
 */

// ═══════════════════════════════════════════════════════════
// 7. GOOGLE SEARCH CONSOLE SETUP
// ═══════════════════════════════════════════════════════════

/**
 * Required Setup Steps:
 * 
 * 1. Go to Google Search Console: https://search.google.com/search-console/
 * 2. Add Property: https://www.rvstudio.in
 * 3. Verify Domain Ownership:
 *    - Option A: Meta Tag (Already in index.html)
 *      Replace "YOUR_GOOGLE_VERIFICATION_CODE_HERE" with your code
 *    - Option B: DNS Record
 *    - Option C: File Upload
 * 4. Submit Sitemap: https://www.rvstudio.in/sitemap.xml
 * 5. Monitor:
 *    - Coverage reports
 *    - Performance metrics
 *    - Mobile usability
 *    - Core Web Vitals
 * 
 * File to Update: index.html (line with meta name="google-site-verification")
 */

// ═══════════════════════════════════════════════════════════
// 8. WEB APP MANIFEST & PWA
// ═══════════════════════════════════════════════════════════

/**
 * Manifest.json Includes:
 * 
 * - App name and short name
 * - Description and icons
 * - Display mode (standalone)
 * - Theme and background colors
 * - App shortcuts
 * - Screenshot descriptions
 * - Share target configuration
 * 
 * Benefits:
 * ✓ Installable as PWA
 * ✓ Better mobile app-like experience
 * ✓ Offline functionality potential
 * ✓ App shortcut access
 * ✓ Android app manifest compatibility
 */

// ═══════════════════════════════════════════════════════════
// 9. GITHUB PAGES DEPLOYMENT
// ═══════════════════════════════════════════════════════════

/**
 * Current Configuration:
 * - Base URL: /rvstudio/ (in vite.config.js)
 * - Custom Domain: https://www.rvstudio.in
 * - Repository: GitHub Pages compatible
 * 
 * SEO Notes for GitHub Pages:
 * 1. Ensure robots.txt and sitemap.xml are in public folder
 * 2. Use canonical URLs pointing to custom domain
 * 3. Set preferred domain in Google Search Console
 * 4. Monitor indexation status
 * 
 * File Structure:
 * public/
 *   ├── robots.txt
 *   ├── sitemap.xml
 *   ├── manifest.json
 *   ├── favicon.svg
 *   └── [favicon files]
 */

// ═══════════════════════════════════════════════════════════
// 10. PERFORMANCE & LIGHTHOUSE OPTIMIZATION
// ═══════════════════════════════════════════════════════════

/**
 * SEO Lighthouse Score Targets:
 * - Target: 95+ out of 100
 * 
 * Key Factors:
 * ✓ Mobile-friendly design
 * ✓ Fast load times (Core Web Vitals)
 * ✓ Structured data markup
 * ✓ Heading hierarchy
 * ✓ Image alt text
 * ✓ Meta descriptions
 * ✓ Accessible color contrast
 * ✓ Keyboard navigation
 * 
 * Performance Tips:
 * - Use Lighthouse DevTools to audit regularly
 * - Monitor Core Web Vitals
 * - Optimize images with Cloudinary
 * - Minimize CSS/JS bundles
 * - Use lazy loading for below-fold content
 * - Implement caching strategies
 */

// ═══════════════════════════════════════════════════════════
// 11. BREADCRUMBS & NAVIGATION
// ═══════════════════════════════════════════════════════════

/**
 * Breadcrumb Implementation:
 * 
 * Home > Portfolio > [Collection Name]
 * Home > About
 * Home > Contact
 * 
 * Benefits:
 * ✓ Improved user navigation
 * ✓ SEO boost for hierarchical understanding
 * ✓ Better crawlability
 * ✓ Enhanced SERP display
 * 
 * Implementation: generateBreadcrumbs() in seoHelpers.js
 */

// ═══════════════════════════════════════════════════════════
// 12. KEYWORDS & CONTENT STRATEGY
// ═══════════════════════════════════════════════════════════

/**
 * Target Keywords:
 * 
 * Primary:
 * - "Photography studio Rajkot"
 * - "Wedding photographer Gujarat"
 * - "Professional photography"
 * 
 * Secondary:
 * - "Portrait photography"
 * - "Commercial photography"
 * - "Event photography Rajkot"
 * - "Professional photographer India"
 * 
 * Long-tail:
 * - "Best wedding photographer in Rajkot"
 * - "Pre-wedding photography session Rajkot"
 * - "Professional portrait sessions Gujarat"
 * 
 * Integration:
 * - Meta descriptions
 * - Page titles
 * - H1/H2 tags
 * - Image alt text
 * - URL structure
 */

// ═══════════════════════════════════════════════════════════
// 13. MONITORING & MAINTENANCE
// ═══════════════════════════════════════════════════════════

/**
 * Regular SEO Tasks:
 * 
 * Weekly:
 * - Monitor Google Search Console
 * - Check Core Web Vitals
 * - Review error logs
 * 
 * Monthly:
 * - Lighthouse audit
 * - Backlink analysis
 * - Keyword ranking check
 * - User experience metrics
 * 
 * Quarterly:
 * - Comprehensive SEO audit
 * - Competitor analysis
 * - Content refresh review
 * - Technical SEO review
 * 
 * Tools Recommended:
 * - Google Search Console
 * - Google Analytics 4
 * - Lighthouse DevTools
 * - SEMrush or Ahrefs
 * - Screaming Frog
 */

// ═══════════════════════════════════════════════════════════
// 14. SETUP CHECKLIST
// ═══════════════════════════════════════════════════════════

/**
 * ✓ SEOHead component with ProfessionalService schema
 * ✓ All pages configured with SEOHead
 * ✓ Open Graph tags for social sharing
 * ✓ Twitter Card tags
 * ✓ Sitemap.xml generated
 * ✓ Robots.txt configured
 * ✓ Manifest.json created
 * ✓ Index.html enhanced with meta tags
 * ✓ Breadcrumb schema implemented
 * ✓ Heading hierarchy optimized
 * ✓ All images have alt attributes
 * ✓ Google Search Console meta tag added
 * ✓ GitHub Pages compatibility verified
 * 
 * Next Steps:
 * 1. Replace "YOUR_GOOGLE_VERIFICATION_CODE_HERE" with actual code
 * 2. Generate OG images (1200x630px)
 * 3. Create favicon files
 * 4. Test with Google Mobile-Friendly Test
 * 5. Submit sitemap to Google Search Console
 * 6. Monitor rankings and traffic
 */

export const SEO_CONFIG = {
  siteName: 'RV Studio',
  baseUrl: 'https://www.rvstudio.in',
  email: 'rvstudioin@gmail.com',
  phone: '+91-99047-95771',
  address: 'Rajkot, Gujarat, India',
  social: {
    instagram: 'https://www.instagram.com/rvstudio',
    facebook: 'https://www.facebook.com/rvstudio',
    twitter: '@rvstudio'
  },
  sitemapUrl: 'https://www.rvstudio.in/sitemap.xml',
  robotsUrl: 'https://www.rvstudio.in/robots.txt'
};
