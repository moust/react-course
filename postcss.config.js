module.exports = {
  plugins: [
    require('postcss-import'),
    // require('postcss-url'),
    require('postcss-cssnext'),
    require('cssnano')({ autoprefixer: false }),
  ],
}
