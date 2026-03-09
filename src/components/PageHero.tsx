/**
 * Hero banner with image for supporting pages (Funding Options, Working Capital, etc.).
 * Shown when users click a tab in the header. Each page gets a unique image from pageHeroImages config.
 */
import { useLocation } from 'react-router-dom';
import { getPageHeroImage } from '../config/pageHeroImages';

interface PageHeroProps {
  image?: string;
  imageAlt?: string;
}

export function PageHero({ image, imageAlt }: PageHeroProps) {
  const { pathname } = useLocation();
  const heroImage = image ?? getPageHeroImage(pathname);
  const alt = imageAlt ?? 'Restaurant dining room representing the daily reality of running a restaurant business';
  return (
    <header className="page-hero">
      <div className="page-hero__image-wrap">
        <img
          src={heroImage}
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
