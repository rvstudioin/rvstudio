// ═══════════════════════════════════════════════════════════
// 5. CLOUDINARY IMAGE COMPONENT
// ═══════════════════════════════════════════════════════════
 
// src/components/ui/CloudinaryImage.jsx
import { AdvancedImage, lazyload, placeholder } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { fill, scale } from '@cloudinary/url-gen/actions/resize';
import { auto } from '@cloudinary/url-gen/qualifiers/quality';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
 
const rawCloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
// Use the environment Cloudinary cloud name, fallback to default if not set.
const cloudName = rawCloudName
  ? String(rawCloudName).trim().replace(/^['"]|['"]$/g, '')
  : 'rvstudioin';
const cld = new Cloudinary({ cloud: { cloudName } });
 
/**
 * CloudinaryImage
 * @param {string}  publicId   - Cloudinary public ID
 * @param {number}  width      - Render width
 * @param {number}  height     - Render height
 * @param {string}  alt        - Alt text (required for SEO)
 * @param {string}  className  - Tailwind classes
 * @param {'fill'|'scale'} mode - Resize mode
 */
export function CloudinaryImage({ publicId, width, height, alt, className = '', mode = 'fill' }) {
  const img = cld.image(publicId);
 
  if (mode === 'fill') {
    img.resize(fill().width(width).height(height).gravity(autoGravity()));
  } else {
    img.resize(scale().width(width));
  }
  img.quality(auto());
 
  return (
    <AdvancedImage
      cldImg={img}
      alt={alt}
      className={className}
      plugins={[lazyload(), placeholder({ mode: 'blur' })]}
    />
  );
}