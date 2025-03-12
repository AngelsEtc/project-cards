
export default {
  basePath: 'https://angelsetc.github.io/project-cards',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
