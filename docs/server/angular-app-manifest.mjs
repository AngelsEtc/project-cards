
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
    'index.csr.html': {size: 17115, hash: 'be1f9a9dac24686f1b68bc1bd72754e69260d946c4e7496ff6db9d29dc100a10', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17152, hash: '4f7899332ea282c6890db86fc7229b1d0d9961ece4eeb0bc28d109342ec5dfff', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21191, hash: '55134388c92eefff6b2c4d1d25b67f9ea83a26ae30f6e10fc856ff95fdf65ad6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-HTJ3L7WB.css': {size: 454, hash: 'zg9Y6nw4pg8', text: () => import('./assets-chunks/styles-HTJ3L7WB_css.mjs').then(m => m.default)}
  },
};
