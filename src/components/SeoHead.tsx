import { useEffect } from 'react';
import { SITE_URL, DEFAULT_OG_IMAGE } from '../config';

// Set to this site’s live URL (where this guide is hosted), not the partner site.
interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  /** Set to true for 404 / not-found pages so they are not indexed. */
  noindex?: boolean;
  /** Optional OG/Twitter image URL (e.g. 1200x630). */
  image?: string;
  /** Optional alt text for OG/Twitter image (accessibility + SEO). */
  imageAlt?: string;
  /** OG type: 'website' (default) or 'article' for blog posts. */
  ogType?: 'website' | 'article';
  /** Optional keywords for long-tail topical relevance. */
  keywords?: string;
  /** Optional geographic signals for local/geo intent pages. */
  geoRegion?: string;
  geoPlacename?: string;
}

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

const DEFAULT_OG_IMAGE_ALT = 'Restaurant dining and kitchen imagery from The Restaurant Owners Guide';

export function SeoHead({
  title,
  description,
  canonicalPath,
  noindex,
  image,
  imageAlt,
  ogType = 'website',
  keywords,
  geoRegion,
  geoPlacename,
}: SeoHeadProps) {
  useEffect(() => {
    document.title = title;
    const canonical = `${SITE_URL}${canonicalPath}`;
    setMeta('description', description);

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonical);

    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', canonical, 'property');
    setMeta('og:type', ogType, 'property');
    setMeta('og:image', image ?? DEFAULT_OG_IMAGE, 'property');
    setMeta('og:image:alt', imageAlt ?? DEFAULT_OG_IMAGE_ALT, 'property');
    setMeta('og:locale', 'en_US', 'property');
    setMeta('og:site_name', 'The Restaurant Owners Guide', 'property');

    setMeta('twitter:card', 'summary_large_image', 'name');
    setMeta('twitter:title', title, 'name');
    setMeta('twitter:description', description, 'name');
    setMeta('twitter:image', image ?? DEFAULT_OG_IMAGE, 'name');
    if (keywords) {
      setMeta('keywords', keywords, 'name');
    } else {
      const keywordsTag = document.querySelector('meta[name="keywords"]');
      if (keywordsTag) keywordsTag.remove();
    }
    if (geoRegion) {
      setMeta('geo.region', geoRegion, 'name');
    } else {
      const geoRegionTag = document.querySelector('meta[name="geo.region"]');
      if (geoRegionTag) geoRegionTag.remove();
    }
    if (geoPlacename) {
      setMeta('geo.placename', geoPlacename, 'name');
    } else {
      const geoPlacenameTag = document.querySelector('meta[name="geo.placename"]');
      if (geoPlacenameTag) geoPlacenameTag.remove();
    }

    if (noindex) {
      setMeta('robots', 'noindex, nofollow');
    } else {
      const robots = document.querySelector('meta[name="robots"]');
      if (robots) robots.remove();
    }

    return () => {};
  }, [title, description, canonicalPath, noindex, image, imageAlt, ogType, keywords, geoRegion, geoPlacename]);

  return null;
}
