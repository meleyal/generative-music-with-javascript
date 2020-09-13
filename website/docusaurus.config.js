const PACKAGE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001/dist/tuplet.js'
    : 'https://unpkg.com/tuplet'

const siteConfig = {
  title: 'Tuplet',
  tagline: 'Generative music with JavaScript',
  url: 'https://tuplet.js.org',
  baseUrl: '/',
  projectName: 'tuplet',
  organizationName: 'meleyal',
  favicon: 'img/favicon.png',
  scripts: [PACKAGE_URL, 'https://cdn.jsdelivr.net/npm/@magenta/music@^1.0.0'],
  themeConfig: {
    navbar: {
      title: 'Tuplet',
      logo: {
        alt: 'Site Logo',
        src: 'img/tuplet.svg',
      },
      items: [
        { to: 'book/introduction', label: 'Book', position: 'right' },
        { to: 'book/api/index', label: 'API', position: 'right' },
        {
          href: 'https://github.com/meleyal/tuplet',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {},
    sidebarCollapsible: false,
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
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}

module.exports = siteConfig
