
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4740, hash: '2d718352d44d94bd50e38e8cb278195137b12e0ed2bc3adc5f2a31519c0d8f34', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1127, hash: 'ff14d7facdaa875c94b4d73c26efd7418bf830122dc213ce93de58d670ef033e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 13397, hash: '60fc54e865113ea2d816ef10f342660964104c3be3e31ac4a4aa3ddfac036872', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-W7T5SQ4P.css': {size: 11371, hash: 'rNfImXqzSwk', text: () => import('./assets-chunks/styles-W7T5SQ4P_css.mjs').then(m => m.default)}
  },
};
