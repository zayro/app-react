module.exports = {
  globDirectory: 'build/',
  globPatterns: ['**/*.{json,ico,js,scss,css,jpg,svg,png,html,eot,ttf,woff,woff2,otf,gif,txt,md}'],
  swDest: 'build/sw.js',
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/]
}
