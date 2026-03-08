import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets scroll to top on route change, before the browser paints.
 * Prevents the page from appearing at the wrong scroll position.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    // Override CSS scroll-behavior: smooth so page jumps to top instantly
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    html.style.scrollBehavior = prev;
  }, [pathname]);

  return null;
}
