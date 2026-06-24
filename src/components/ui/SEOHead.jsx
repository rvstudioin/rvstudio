
// ═══════════════════════════════════════════════════════════
// 6. SEO HEAD COMPONENT
// ═══════════════════════════════════════════════════════════
 
// src/components/ui/SEOHead.jsx
// Comprehensive SEO component with schema.org markup, OG tags, Twitter cards, and more
import { Helmet } from 'react-helmet-async';
 
export function SEOHead({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  author,
  publishedDate,
  modifiedDate,
  breadcrumbs,
}) {
  const siteName = 'RV Studio';
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} — Premium Photography Studio Rajkot, Gujarat`;
  const baseUrl = 'https://www.rvstudio.in';
  const canonicalUrl = url ? `${baseUrl}${url}` : baseUrl;
  
  // Default OG image if not provided
  const ogImage = image || `${baseUrl}/og-image.jpg`;
  
  // Default description
  const metaDescription = description || 'RV Studio — Premium photography studio in Rajkot, Gujarat. Specializing in weddings, portraits, commercial, events & nature photography.';

  // Schema.org structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "RV Studio",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "image": ogImage,
    "description": metaDescription,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rajkot",
      "addressLocality": "Rajkot",
      "addressRegion": "Gujarat",
      "postalCode": "360001",
      "addressCountry": "IN"
    },
    "telephone": "+91-99047-95771",
    "email": "rvstudioin@gmail.com",
    "priceRange": "₹₹₹",
    "areaServed": {
      "@type": "City",
      "name": "Rajkot"
    },
    "sameAs": [
      "https://www.instagram.com/rvstudio",
      "https://www.facebook.com/rvstudio"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "knowsAbout": [
      "Wedding Photography",
      "Portrait Photography",
      "Commercial Photography",
      "Event Photography",
      "Fashion Photography",
      "Nature Photography"
    ],
    "serviceType": [
      "Wedding Photography",
      "Portrait Photography",
      "Commercial Photography",
      "Event Coverage",
      "Fashion & Editorial Photography",
      "Nature & Travel Photography"
    ]
  };

  // Breadcrumb schema
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${baseUrl}${item.url}`
    }))
  } : null;

  // Article/BlogPosting schema for portfolio collection pages
  const articleSchema = publishedDate ? {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "name": title,
    "description": description,
    "image": ogImage,
    "url": canonicalUrl,
    "datePublished": publishedDate,
    "dateModified": modifiedDate || publishedDate,
    "author": {
      "@type": "Person",
      "name": author || "RV Studio"
    }
  } : null;
 
  return (
    <Helmet>
      <title>{fullTitle}</title>
      
      {/* Primary Meta Tags */}
      <meta name="title" content={fullTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords || 'photography, studio, wedding, portrait, commercial, events, Rajkot, Gujarat'} />
      <meta name="author" content="RV Studio" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0a0e27" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Language */}
      <html lang="en" />
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      
      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE_HERE" />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@rvstudio" />

      {/* Additional Meta Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      <meta name="msapplication-TileColor" content="#0a0e27" />
      <meta name="format-detection" content="telephone=no" />

      {/* Structured Data: ProfessionalService */}
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}

      {/* Article/Image Schema for Portfolio Pages */}
      {articleSchema && (
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      )}

      {/* Organization Schema */}
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": siteName,
        "url": baseUrl,
        "logo": `${baseUrl}/logo.png`,
        "description": metaDescription,
        "sameAs": [
          "https://www.instagram.com/rvstudio",
          "https://www.facebook.com/rvstudio"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "telephone": "+91-99047-95771",
          "email": "rvstudioin@gmail.com",
          "areaServed": "IN",
          "availableLanguage": ["en"]
        }
      })}</script>

      {/* Local Business Schema */}
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": siteName,
        "image": ogImage,
        "description": metaDescription,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Rajkot",
          "addressRegion": "Gujarat",
          "addressCountry": "IN"
        },
        "telephone": "+91-99047-95771",
        "email": "rvstudioin@gmail.com",
        "url": baseUrl,
        "priceRange": "₹₹₹",
        "sameAs": [
          "https://www.instagram.com/rvstudio",
          "https://www.facebook.com/rvstudio"
        ]
      })}</script>
    </Helmet>
  );
}