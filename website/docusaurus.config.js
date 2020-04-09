// const { inject } = require('./plugins/markdown.js')

const isDev = process.env.NODE_ENV === 'development'

const siteVariables = {
  PACKAGE_URL: isDev
    ? 'http://localhost:3001'
    : 'https://unpkg.com/@meleyal/gen',
}

const siteConfig = {
  title: 'Gen.js',
  tagline: 'Generative music with JavaScript',
  url: 'https://meleyal.github.io',
  baseUrl: '/gen/',
  projectName: 'gen',
  organizationName: 'meleyal',
  favicon: 'img/favicon.png',
  scripts: ['/gen/js/custom.js', `${siteVariables.PACKAGE_URL}/gen.js`],
  themeConfig: {
    navbar: {
      title: 'Gen.js',
      links: [
        { to: 'docs/introduction', label: 'Docs', position: 'right' },
        {
          href: 'https://github.com/meleyal/gen',
          label: 'GitHub',
          position: 'right',
        },
      ],
      hideOnScroll: false,
    },
    footer: false,
    sidebarCollapsible: false,
    disableDarkMode: true,
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      defaultLanguage: 'javascript',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          // remarkPlugins: [inject(siteVariables)]
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}

module.exports = siteConfig
