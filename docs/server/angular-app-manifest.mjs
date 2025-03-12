
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'project-cards',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/project-cards"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 17166, hash: '209a5e30f11d359cb82ec8c614fd97cf6fc912b597d245a939a7e3efb7830598', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17152, hash: '605cf2c7dd6882910aed010e0a04cae95cf4985f4a569aef1d4a18bf09abedee', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 23522, hash: 'ce160af6647bb654d16bf0487021204a65d7c75e6e13b550cacda2bcba9e5ef3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-J74X3WS3.css': {size: 566, hash: 'Rr8jdXowuEc', text: () => import('./assets-chunks/styles-J74X3WS3_css.mjs').then(m => m.default)}
  },
};
