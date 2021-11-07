// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Polywork Handbook',
  tagline: 'How to maximise social value using Polywork',
  url: 'https://polywork.vortex.name',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon/polywork-favicon.svg',
  organizationName: '0-vortex',
  projectName: 'polywork-handbook',
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/0-vortex/polywork-handbook/edit/main/',
          lastVersion: 'current',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/0-vortex/polywork-handbook/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Polywork Handbook',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Handbook',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            href: 'https://github.com/0-vortex/polywork-handbook',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Navigate',
            items: [
              {
                label: 'Docs',
                to: '/',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Download book',
                href: 'https://polywork.vortex.name/polywork-handbook.pdf',
              }
            ],
          },
          {
            title: 'Polywork',
            items: [
              {
                label: 'Skip the wait list',
                href: 'https://www.polywork.com/invite/beyonce',
              },
              {
                label: '@Polywork on Twitter',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
          {
            title: 'About the author',
            items: [
              {
                label: 'Polywork',
                href: 'https://vortex.name',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/0-vortex',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/0_vortex',
              },
            ],
          },
        ],
        logo: {
          alt: "Polywork logo",
          src: "img/logo.svg",
          href: "https://www.polywork.com",
        },
        copyright: `Copyright © ${new Date().getFullYear()} TED Vortex. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.svg',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#582be8',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'icon',
            href: '/favicon/favicon-16x16.png',
            sizes: '16x16'
          },
          {
            tagName: 'link',
            rel: 'icon',
            href: '/favicon/favicon-32x32.png',
            sizes: '32x32'
          },
          {
            tagName: 'link',
            rel: 'icon',
            href: '/favicon/favicon-96x96.png',
            sizes: '96x96'
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon-precomposed',
            href: '/favicon/apple-icon-57x57.png',
            sizes: '57x57'
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon-precomposed',
            href: '/favicon/apple-icon-60x60.png',
            sizes: '60x60'
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon-precomposed',
            href: '/favicon/apple-icon-72x72.png',
            sizes: '72x72'
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon-precomposed',
            href: '/favicon/apple-icon-76x76.png',
            sizes: '76x76'
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon-precomposed',
            href: '/favicon/apple-icon-114x114.png',
            sizes: '114x114'
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon-precomposed',
            href: '/favicon/apple-icon-120x120.png',
            sizes: '120x120'
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon-precomposed',
            href: '/favicon/apple-icon-152x152.png',
            sizes: '152x152'
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon-precomposed',
            href: '/favicon/apple-icon-180x180.png',
            sizes: '180x180'
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/logo.svg',
            color: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/favicon/android-icon-144x144.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ]
};

module.exports = config;
