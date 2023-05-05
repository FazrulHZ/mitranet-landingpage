module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  pwa: {
    name: 'Mitranusa.id',
    themeColor: '#212121',
    msTileColor: '#000000',
    display: 'standalone',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'default',
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-icon-152x152.png',
      msTileImage: 'img/icons/msapplication-icon-144x144.png'
    },
  },
}