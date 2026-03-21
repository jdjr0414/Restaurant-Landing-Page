/**
 * Redirect requests from restaurant-landing-page.jdjr0414.workers.dev
 * to https://therestaurantownersguide.com
 */
const WORKERS_DEV_HOST = 'restaurant-landing-page.jdjr0414.workers.dev';
const REDIRECT_TO = 'https://therestaurantownersguide.com';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Redirect workers.dev subdomain
    if (url.hostname === WORKERS_DEV_HOST) {
      const target = REDIRECT_TO + url.pathname + url.search;
      return Response.redirect(target, 301);
    }

    // Redirect www to non-www
    if (url.hostname === 'www.therestaurantownersguide.com') {
      const target = 'https://therestaurantownersguide.com' + url.pathname + url.search;
      return Response.redirect(target, 301);
    }

    return env.ASSETS.fetch(request);
  },
};
