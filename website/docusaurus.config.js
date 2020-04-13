// const { inject } = require('./plugins/markdown.js')

const isDev = process.env.NODE_ENV === 'development'

const siteVariables = {
  PACKAGE_URL: isDev ? 'http://localhost:3001' : 'https://unpkg.com/tuplet',
}

const siteConfig = {
  title: 'Tuplet',
  tagline: 'Generative music with JavaScript',
  url: 'https://meleyal.github.io',
  baseUrl: '/',
  projectName: 'tuplet',
  organizationName: 'meleyal',
  favicon: 'img/favicon.png',
  scripts: ['/js/custom.js', `${siteVariables.PACKAGE_URL}/tuplet.js`],
  themeConfig: {
    navbar: {
      title: 'Tuplet',
      logo: {
        alt: 'Site Logo',
        src: 'img/tuplet.svg',
      },
      links: [
        { to: 'docs/introduction', label: 'Docs', position: 'right' },
        {
          href: 'https://github.com/meleyal/tuplet',
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
