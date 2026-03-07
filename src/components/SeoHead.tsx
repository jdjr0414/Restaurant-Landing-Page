import { useEffect } from 'react';

// Set to this site’s live URL (where this guide is hosted), not the partner site.
const SITE_URL = 'https://www.restaurantownersguide.com';

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
}

export function SeoHead({ title, description, canonicalPath }: SeoHeadProps) {
  useEffect(() => {
    document.title = title;
    const canonical = `${SITE_URL}${canonicalPath}`;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonical);

    return () => {
      // Optional: reset on unmount if needed
    };
  }, [title, description, canonicalPath]);

  return null;
}
