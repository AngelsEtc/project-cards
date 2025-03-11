
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
    'index.csr.html': {size: 17166, hash: '239eb37a81d47999fc885017de26361c4c0ef06bbfd7c357353d62b5119a2a07', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17152, hash: 'f5611bdcc60eeb69eaaee3d3f9db1cc30afa3bced118f1a5ed51499a8de8989c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22970, hash: '4a9292dd6a080257a899d6f796989949b3524ec97dd4a836f45790fecf1603c6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-J74X3WS3.css': {size: 566, hash: 'Rr8jdXowuEc', text: () => import('./assets-chunks/styles-J74X3WS3_css.mjs').then(m => m.default)}
  },
};
