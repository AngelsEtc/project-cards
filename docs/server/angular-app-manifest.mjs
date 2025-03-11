
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
    'index.csr.html': {size: 17334, hash: '283a6e4d87b00fa4e43561ad277aa477b88cd7849a131549b83187a38779cc19', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17278, hash: '7f696e2aa717cccdcd7989cfc9f0658e7b22e992a94613d7644134e0a86f0551', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22707, hash: '6b3b9606d0094db2f3c9981d73354468d2b4d36b30c379b33621fbdb00891351', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-J74X3WS3.css': {size: 566, hash: 'Rr8jdXowuEc', text: () => import('./assets-chunks/styles-J74X3WS3_css.mjs').then(m => m.default)}
  },
};
