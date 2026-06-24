/**
 * SEO Helper Utilities
 * Provides functions for generating structured data, breadcrumbs, and SEO metadata
 */

/**
 * Generate breadcrumb navigation for current page
 * @param {string} pathname - Current URL pathname
 * @param {object} collectionData - Optional collection data for portfolio pages
 * @returns {array} Breadcrumb array with name and URL
 */
export function generateBreadcrumbs(pathname, collectionData) {
  const breadcrumbs = [{ name: 'Home', url: '/' }];

  if (pathname === '/' || pathname === '') {
    return [];
  }

  const pathSegments = pathname.split('/').filter(Boolean);

  if (pathSegments[0] === 'portfolio') {
    breadcrumbs.push({ name: 'Portfolio', url: '/portfolio' });

    if (pathSegments[1] && collectionData?.title) {
      breadcrumbs.push({
        name: collectionData.title,
        url: `/portfolio/${pathSegments[1]}`
      });
    }
  } else if (pathSegments[0] === 'about') {
    breadcrumbs.push({ name: 'About Us', url: '/about' });
  } else if (pathSegments[0] === 'contact') {
    breadcrumbs.push({ name: 'Contact', url: '/contact' });
  }

  return breadcrumbs;
}

/**
 * Sanitize text for use in meta descriptions
 * @param {string} text - Text to sanitize
 * @param {number} maxLength - Maximum length (default 160)
 * @returns {string} Sanitized text
 */
export function sanitizeDescription(text, maxLength = 160) {
  if (!text) return '';
  const cleaned = text
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\s+/g, ' ') // Collapse whitespace
    .trim();
  return cleaned.length > maxLength ? cleaned.substring(0, maxLength) + '...' : cleaned;
}

/**
 * Generate OG image URL with fallback
 * @param {string} image - Primary image URL
 * @param {string} fallback - Fallback image URL
 * @returns {string} Image URL
 */
export function getOGImage(image, fallback = '/og-image.jpg') {
  return image || fallback;
}

/**
 * Generate keywords from service/category
 * @param {string} category - Category name
 * @returns {string} Keywords string
 */
export function generateKeywords(category) {
  const keywords = {
    wedding: 'wedding photography, pre-wedding, bridal, ceremonies, Rajkot',
    portrait: 'portrait photography, family portraits, individual photos, professional headshots',
    commercial: 'commercial photography, product photography, brand visuals, business photography',
    events: 'event photography, corporate events, conferences, party photography',
    fashion: 'fashion photography, editorial photography, lookbooks, style photography',
    nature: 'nature photography, landscape, wildlife, travel photography'
  };

  return keywords[category] || 'photography, studio, professional';
}

/**
 * Get site-wide SEO metadata
 * @returns {object} Site metadata
 */
export function getSiteMetadata() {
  return {
    siteName: 'RV Studio',
    baseUrl: 'https://www.rvstudio.in',
    email: 'rvstudioin@gmail.com',
    phone: '+91-99047-95771',
    address: 'Rajkot, Gujarat, India',
    instagram: 'https://www.instagram.com/rvstudio',
    facebook: 'https://www.facebook.com/rvstudio',
    defaultDescription: 'RV Studio — Premium photography studio in Rajkot, Gujarat. Specializing in weddings, portraits, commercial, events & nature photography.',
    twitter: '@rvstudio'
  };
}

/**
 * Format date for schema.org markup
 * @param {string|Date} date - Date to format
 * @returns {string} ISO 8601 formatted date
 */
export function formatSchemaDate(date) {
  if (!date) return new Date().toISOString();
  const d = new Date(date);
  return d.toISOString();
}

/**
 * Generate structured data for hero section
 * @returns {object} Schema.org markup
 */
export function generateHeroSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'RV Studio',
    'url': 'https://www.rvstudio.in',
    'description': 'Premium photography studio specializing in weddings, portraits, commercial, events and nature photography',
    'areaServed': 'Rajkot, Gujarat, India',
    'telephone': '+91-99047-95771'
  };
}

/**
 * Generate breadcrumb schema.org markup
 * @param {array} breadcrumbs - Breadcrumb array
 * @returns {object} BreadcrumbList schema
 */
export function generateBreadcrumbSchema(breadcrumbs) {
  if (!breadcrumbs || breadcrumbs.length === 0) return null;

  const baseUrl = 'https://www.rvstudio.in';
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `${baseUrl}${item.url}`
    }))
  };
}

/**
 * Get estimated reading time
 * @param {string} text - Text content
 * @returns {number} Estimated reading time in minutes
 */
export function getReadingTime(text) {
  if (!text) return 0;
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}
