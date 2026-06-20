/**
 * SSR/SSG entry: render the app for a given URL and export path/meta helpers for prerender.
 *
 * Uses renderToPipeableStream + onAllReady (not renderToString) so that React.lazy/Suspense
 * boundaries fully resolve before we capture the HTML. renderToString does NOT support Suspense
 * and would emit an empty body for every lazy-loaded route.
 */
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Writable } from 'node:stream';
import App from './App';
import { getAllPaths, getMeta } from './staticMeta';

export { getAllPaths, getMeta };

export function render(url: string): Promise<{ html: string }> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    const writable = new Writable({
      write(chunk, _encoding, callback) {
        chunks.push(Buffer.from(chunk));
        callback();
      },
    });
    writable.on('finish', () => resolve({ html: Buffer.concat(chunks).toString('utf8') }));
    writable.on('error', reject);

    const { pipe } = renderToPipeableStream(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>,
      {
        // onAllReady fires once every Suspense boundary (including lazy routes) has resolved,
        // so the buffered HTML contains the full page body.
        onAllReady() {
          pipe(writable);
        },
        onError(error) {
          reject(error);
        },
      }
    );
  });
}
