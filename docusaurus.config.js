// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'English Bible for Chinese Engineers',
  tagline: 'Learn English the Way Engineers Think',

  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://jackcc999.github.io',
  baseUrl: '/eb4ce/',
  organizationName: 'jackcc999',
  projectName: 'eb4ce',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

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
          editUrl: 'https://github.com/jackcc999/eb4ce/edit/main/',
        },
        blog: false,
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
            'English for Chinese Engineers, Engineering English, Chinese English Learners, 英语语法, 工程师英语, 程序员英语, 硅谷英语, 技术面试英语',
        },
        {
          name: 'description',
          content:
            '为中国工程师打造的实用英语知识库，讲解语法、核心句型、常见错误，以及会议、代码评审、邮件和技术面试中的真实英语表达。',
        },
      ],

      navbar: {
        title: 'EB4CE',
        logo: {
          alt: 'English Bible for Chinese Engineers Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '学习指南',
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
            title: '学习',
            items: [
              {
                label: '开始学习',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '开源项目',
            items: [
              {
                label: '查看 GitHub',
                href: 'https://github.com/jackcc999/eb4ce',
              },
              {
                label: '提交建议',
                href: 'https://github.com/jackcc999/eb4ce/issues',
              },
            ],
          },
          {
            title: '理念',
            items: [
              {
                label: 'Understand, Don’t Memorize',
                to: '/docs/intro',
              },
              {
                label: 'Learn the Way Engineers Think',
                to: '/docs/intro',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} English Bible for Chinese Engineers. Built as an open-source learning project.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
