
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/project-cards/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/project-cards"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 510, hash: '2f17fcc0afd4151b77cf9c932eb62f9467151a0feac213913177a1c9188c8367', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1023, hash: '1230655d3cdb83d2070301fec43e43f5caa5645313d9d2346bbe72a196b35966', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20855, hash: '1119a40f92493bb3d651367afc6eb540fe11bb5d98c0ed0b941997d53ede2ea2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
