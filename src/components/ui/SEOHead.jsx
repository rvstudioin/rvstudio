
// ═══════════════════════════════════════════════════════════
// 6. SEO HEAD COMPONENT
// ═══════════════════════════════════════════════════════════
 
// src/components/ui/SEOHead.jsx
// Component to render page metadata and social preview tags via react-helmet-async.
import { Helmet } from 'react-helmet-async';
 
export function SEOHead({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
}) {
  const siteName   = 'RV Studio';
  const fullTitle  = title ? `${title} | ${siteName}` : `${siteName} — Photography Studio Rajkot`;
  const baseUrl    = 'https://www.rvstudio.in';
  const canonicalUrl = url ? `${baseUrl}${url}` : baseUrl;
 
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords"    content={keywords} />
      <link rel="canonical"    href={canonicalUrl} />
 
      {/* Open Graph */}
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image"       content={image} />
      <meta property="og:url"         content={canonicalUrl} />
      <meta property="og:type"        content={type} />
      <meta property="og:site_name"   content={siteName} />
 
      {/* Twitter Card */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={image} />
 
      {/* Structured Data: LocalBusiness */}
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "RV Studio",
        "image": image,
        "description": description,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Rajkot",
          "addressRegion": "Gujarat",
          "addressCountry": "IN"
        },
        "telephone": "+91-98765-43210",
        "email": "hello@rvstudio.in",
        "url": baseUrl,
        "priceRange": "₹₹₹",
        "openingHours": "Mo-Sa 09:00-18:00",
        "sameAs": [
          "https://www.instagram.com/rvstudio",
          "https://www.facebook.com/rvstudio"
        ]
      })}</script>
    </Helmet>
  );
}