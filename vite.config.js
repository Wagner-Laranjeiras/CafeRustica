import { resolve } from 'path';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import htmlImages from 'vite-plugin-html-images';
import handlebars from 'vite-plugin-handlebars';

module.exports = defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        cafe: resolve(__dirname, 'src/cafe/index.html'),
        herkunft: resolve(__dirname, 'src/herkunft/index.html'),
        contact: resolve(__dirname, 'src/contact/index.html'),
        impressum: resolve(__dirname, 'src/impressum/index.html'),
        product: resolve(__dirname, 'src/product/index.html')
      },
    },
  },
  plugins: [
    imagetools(),
    htmlImages(),
    handlebars({partialDirectory: resolve(__dirname, 'src/components')}),
  ],
});