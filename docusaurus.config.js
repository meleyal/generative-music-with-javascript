const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? '/'
    : '/generative-music-with-javascript/'

const siteConfig = {
  title: 'Generative Music with JavaScript',
  url: 'https://meleyal.github.io',
  baseUrl: BASE_URL,
  projectName: 'generative-music-with-javascript',
  organizationName: 'meleyal',
  favicon: 'img/favicon.png',
  themeConfig: {
    navbar: {
      title: 'Generative Music with JavaScript',
      items: [
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
          routeBasePath: '/',
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
