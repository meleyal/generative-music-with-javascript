const siteConfig = {
  title: 'Gen.js',
  tagline: 'Generative Music with JavaScript',
  url: 'https://meleyal.github.io',
  baseUrl: '/gen/',
  projectName: 'gen',
  organizationName: 'meleyal',
  headerLinks: [
    { doc: 'introduction', label: 'Docs' },
    { doc: 'api/index', label: 'API' },
    {
      href: 'https://github.com/meleyal/gen',
      label: 'GitHub'
    }
  ],
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#b263f9',
    secondaryColor: '#444444'
  },
  highlight: {
    theme: 'github'
  },
  usePrism: true,
  onPageNav: 'separate',
  docsSideNavCollapsible: false,
  cleanUrl: true,
  enableUpdateTime: true,
  scripts: ['/gen/js/custom.js']
}

module.exports = siteConfig
