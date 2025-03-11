
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
    'index.csr.html': {size: 17166, hash: '7bfa08223f66eba61eb390e2c63b623cc44a374f9a082a348e94ed43b1d631cd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17152, hash: '79013e83dd1fde3efabed9b2efb9fd294cd3d0fdec9398ea65f1489f120635eb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22968, hash: 'f8776cb28f14e2271679a1306577fbcb167e8c6932c3f6b3a074f621e7d8f28f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-J74X3WS3.css': {size: 566, hash: 'Rr8jdXowuEc', text: () => import('./assets-chunks/styles-J74X3WS3_css.mjs').then(m => m.default)}
  },
};
