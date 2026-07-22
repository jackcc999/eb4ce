// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'English Bible for Chinese Engineers',
  tagline: 'Practical English for Chinese Engineers',

  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // GitHub Pages 网站域名
  url: 'https://jackcc999.github.io',

  // GitHub Pages 项目路径
  baseUrl: '/eb4ce/',

  // GitHub 用户名
  organizationName: 'jackcc999',

  // GitHub 仓库名
  projectName: 'eb4ce',

  // Docusaurus deploy 命令使用的部署分支
  deploymentBranch: 'gh-pages',

  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',

          // 每篇文档底部显示 Edit this page
          editUrl:
            'https://github.com/jackcc999/eb4ce/edit/main/',
        },

        blog: {
          showReadingTime: true,

          editUrl:
            'https://github.com/jackcc999/eb4ce/edit/main/blog/',
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords',
          content:
            'English, Chinese Engineers, Engineering English, 英语学习, 工程师英语',
        },
      ],

      navbar: {
        title: 'English Bible for Chinese Engineers',

        logo: {
          alt: 'English Bible for Chinese Engineers Logo',
          src: 'img/logo.svg',
        },

        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '英语文档',
          },
          {
            to: '/blog',
            label: '博客',
            position: 'left',
          },
          {
            href: 'https://github.com/jackcc999/eb4ce',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',

        links: [
          {
            title: '内容',
            items: [
              {
                label: '英语文档',
                to: '/docs/intro',
              },
              {
                label: '博客',
                to: '/blog',
              },
            ],
          },
          {
            title: '项目',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/jackcc999/eb4ce',
              },
              {
                label: '提交问题',
                href: 'https://github.com/jackcc999/eb4ce/issues',
              },
            ],
          },
        ],

        copyright: `Copyright © ${new Date().getFullYear()} English Bible for Chinese Engineers.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;