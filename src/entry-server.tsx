/**
 * SSR/SSG entry: render the app for a given URL and export path/meta helpers for prerender.
 */
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { getAllPaths, getMeta } from './staticMeta';

export { getAllPaths, getMeta };

export function render(url: string): { html: string } {
  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
  return { html };
}
