// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  learningSidebar: [
    {
      type: 'category',
      label: 'Start Here',
      link: {type: 'doc', id: 'intro'},
      items: ['start/learning-roadmap', 'start/how-to-use'],
    },
    {
      type: 'category',
      label: 'Sentence Structure',
      link: {type: 'doc', id: 'sentence-structure/sentence-structure'},
      items: [],
    },
    {
      type: 'category',
      label: 'Sentence Patterns',
      link: {type: 'doc', id: 'sentence-patterns/sentence-patterns'},
      items: [],
    },
    {
      type: 'category',
      label: 'Tenses',
      link: {type: 'doc', id: 'tenses/tenses'},
      items: [],
    },
    {
      type: 'category',
      label: 'Grammar',
      link: {type: 'doc', id: 'grammar/grammar'},
      items: [],
    },
    {
      type: 'category',
      label: 'Think in English',
      link: {type: 'doc', id: 'think-in-english/think-in-english'},
      items: [],
    },
    {
      type: 'category',
      label: 'Engineer English',
      link: {type: 'doc', id: 'engineer-english/engineer-english'},
      items: [],
    },
    {
      type: 'category',
      label: 'Reference',
      link: {type: 'generated-index', title: 'Reference'},
      items: [
        'common-mistakes/common-mistakes',
        'vocabulary/vocabulary',
        'cheat-sheets/cheat-sheets',
      ],
    },
  ],
};

export default sidebars;
