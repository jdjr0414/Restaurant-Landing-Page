/**
 * Hero banner with image for supporting pages (Funding Options, Working Capital, etc.).
 * Shown when users click a tab in the header.
 */
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80';

interface PageHeroProps {
  image?: string;
  imageAlt?: string;
}

export function PageHero({ image = DEFAULT_IMAGE, imageAlt }: PageHeroProps) {
  const alt = imageAlt ?? 'Restaurant dining room representing the daily reality of running a restaurant business';
  return (
    <header className="page-hero">
      <div className="page-hero__image-wrap">
        <img
          src={image}
          alt={alt}
          className="page-hero__image"
          width={1200}
          height={400}
          loading="eager"
        />
        <div className="page-hero__overlay" aria-hidden />
      </div>
    </header>
  );
}
