// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'English Bible for Chinese Engineers',
  tagline: 'Build English Intuition. Learn the Way Engineers Think.',

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
            '帮助中文母语工程师从第一性原理理解英语，建立英语直觉，并在会议、代码评审、邮件和技术面试中自然表达。',
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
            sidebarId: 'learningSidebar',
            position: 'left',
            label: 'Start Learning',
          },
          {
            to: '/docs/start/learning-roadmap',
            label: 'Roadmap',
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
            title: 'Learn',
            items: [
              {label: 'Start Here', to: '/docs/intro'},
              {label: 'Learning Roadmap', to: '/docs/start/learning-roadmap'},
              {label: 'How to Use EB4CE', to: '/docs/start/how-to-use'},
            ],
          },
          {
            title: 'Knowledge',
            items: [
              {label: 'Sentence Structure', to: '/docs/sentence-structure/sentence-structure'},
              {label: 'Think in English', to: '/docs/think-in-english/think-in-english'},
              {label: 'Engineer English', to: '/docs/engineer-english/engineer-english'},
            ],
          },
          {
            title: 'Open Source',
            items: [
              {label: 'GitHub', href: 'https://github.com/jackcc999/eb4ce'},
              {label: 'Submit an Issue', href: 'https://github.com/jackcc999/eb4ce/issues'},
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
