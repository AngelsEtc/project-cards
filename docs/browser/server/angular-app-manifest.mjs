
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://angelsetc.github.io/project-cards/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/project-cards"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 17159, hash: '75fe71af816fddb29c93870a8d15f3c45fd6a65cd4f21d4a5df031a7a8f4a0bd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17154, hash: 'b8e8818e3b810e65ea0fed36848f2a63800d27e450a808b642b164e0f3d52809', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 23520, hash: '16943a32278a1001825c79a9b36bcdc25494dfda26e6cf642177548b8fcdce47', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles.css': {size: 566, hash: 'Rr8jdXowuEc', text: () => import('./assets-chunks/styles_css.mjs').then(m => m.default)}
  },
};
