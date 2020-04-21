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
  scripts: [PACKAGE_URL],
  themeConfig: {
    navbar: {
      title: 'Tuplet',
      logo: {
        alt: 'Site Logo',
        src: 'img/tuplet.svg',
      },
      links: [
        { to: 'docs/introduction', label: 'Book', position: 'right' },
        { to: 'docs/api/index', label: 'API', position: 'right' },
        {
          href: 'https://github.com/meleyal/tuplet',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: false,
    sidebarCollapsible: false,
    disableDarkMode: true,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
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
