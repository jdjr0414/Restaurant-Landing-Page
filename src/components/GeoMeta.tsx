/**
 * Geo meta tags for geographic SEO (GEO).
 * Targets US restaurant owners. Add to layout or index.html.
 */
import { useEffect } from 'react';

export function GeoMeta() {
  useEffect(() => {
    const metas = [
      { name: 'geo.region', content: 'US' },
      { name: 'geo.placename', content: 'United States' },
      { name: 'DC.title', content: 'Restaurant Cash Flow & Funding | The Restaurant Owners Guide' },
    ];
    metas.forEach(({ name, content }) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    });
    return () => {};
  }, []);
  return null;
}
