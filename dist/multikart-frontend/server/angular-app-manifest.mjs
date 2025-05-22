
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/components/home/home.routes.ts": [
    {
      "path": "chunk-RFIB65A7.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-EMFZ5P2D.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-UXCHTQFM.js",
      "dynamicImport": false
    }
  ],
  "src/app/components/account/account.routes.ts": [
    {
      "path": "chunk-DHXLW6LT.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-IKFNSDJD.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-MUYEATRO.js",
      "dynamicImport": false
    }
  ],
  "src/app/components/blog/blog.routes.ts": [
    {
      "path": "chunk-QYLEWQZC.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-EMFZ5P2D.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-MUYEATRO.js",
      "dynamicImport": false
    }
  ],
  "src/app/components/shop/shop.routes.ts": [
    {
      "path": "chunk-KCNBIZTO.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-UXCHTQFM.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-IKFNSDJD.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-MUYEATRO.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-F35A42XG.js",
      "dynamicImport": false
    }
  ],
  "src/app/components/page/page.routes.ts": [
    {
      "path": "chunk-WFKKRD2Z.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-F35A42XG.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 43393, hash: '032a77040eed1d2a1ceeff654537862479aacb49669fac54cf75dfc2bfa08fc3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 38958, hash: '8e619ed3c9cf6a589ca66ca82cb23d1835dee9bb39e2e9baa8df2084bbee1b8b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-HD7JJ2LJ.css': {size: 1134154, hash: 'yVXdJD7reKU', text: () => import('./assets-chunks/styles-HD7JJ2LJ_css.mjs').then(m => m.default)}
  },
};
