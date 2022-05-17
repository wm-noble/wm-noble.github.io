const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
  theme: defaultTheme({
    sidebar: false,
    navbar: false,
    contributors: false,
    lastUpdated: false,
  }),
}
