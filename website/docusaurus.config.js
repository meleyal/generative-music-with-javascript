const PACKAGE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001/dist/tuplet.js'
    : 'https://unpkg.com/tuplet'

const siteConfig = {
  title: 'Generative Music with JavaScript',
  url: 'https://meleyal.github.io',
  baseUrl: '/generative-music-with-javascript/',
  projectName: 'generative-music-with-javascript',
  organizationName: 'meleyal',
  favicon: 'img/favicon.png',
  scripts: [PACKAGE_URL, 'https://cdn.jsdelivr.net/npm/@magenta/music@^1.0.0'],
  themeConfig: {
    navbar: {
      title: 'Generative Music with JavaScript',
      items: [
        { to: 'book/introduction', label: 'Book', position: 'right' },
        {
          href: 'https://github.com/meleyal/generative-music-with-javascript',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {},
    colorMode: {
      disableSwitch: true,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'book',
          routeBasePath: 'book',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}

module.exports = siteConfig
