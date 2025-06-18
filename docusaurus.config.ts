import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkCodeImport from 'remark-code-import';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Learn to Code Python for Free',
  tagline: 'Learn Python, Make Projects. Have fun learning to code! Free without logins.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://krblackwell.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: true,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'krblackwell', // Usually your GitHub org/user name.
  projectName: 'krblackwell.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkCodeImport],
          showLastUpdateTime: true
          },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    announcementBar: {
      id: 'under_construction',
      content:
        '🚧 This site is still under construction. Check back soon for updates!',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: false,
    },
    image: 'img/social-card.jpg',
    navbar: {
      title: 'Home',
      logo: {
        alt: 'Site Logo with letters KB',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'pythonSidebar',
          position: 'left',
          label: 'Python',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/krblackwell/krblackwell.github.io',
          position: 'right',
          className: 'navbar-github-icon',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Python Lessons',
          items: [
            {
              label: 'Python Foundations',
              to: '/docs/python/foundations',
            },
          ],
        },
        {
          title: 'Site Links',
          items: [
            {
              html: '<a href="/lite/lab?path=welcome.md">The Lab</a>',
             },
            {
              label: 'Get Started with Python',
              href: '/docs/python/get-set-up/python-get-set-up-website',
            },
            {
              label: 'Jump in! Python Foundations',
              href: '/docs/python/foundations',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog for Parents and Teachers',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/krblackwell/krblackwell.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
