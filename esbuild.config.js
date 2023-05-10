const esbuild = require('esbuild');

// Browser
esbuild.build({
    entryPoints: ['./assets/js/stickyheader.js'],
    outfile: './public/assets/dist/stickyheader.js',
    minify: true,
    bundle: true,
    sourcemap: false,
    format: 'iife',
    globalName: 'StickyHeader',
    target: ['es2015']
}).catch((e) => console.error(e.message))
