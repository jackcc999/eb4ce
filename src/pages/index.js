import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

const popularTopics = [
  {
    title: 'have done vs be done',
    category: '常见误区',
    description: '一个是完成时，一个通常是被动语态或状态。先看助动词，别只看 done。',
  },
  {
    title: 'I was wondering...',
    category: '真实表达',
    description: '语法上是过去进行时，实际交流中却常用于礼貌地提出请求。',
  },
  {
    title: 'There be vs have',
    category: '核心句型',
    description: 'There be 表示“存在”，have 表示“拥有”，中文里都可能翻译成“有”。',
  },
  {
    title: 'will vs be going to',
    category: '核心结构',
    description: '一个更常用于临时决定或预测，一个更强调已有计划或明显迹象。',
  },
  {
    title: 'Standup English',
    category: '工程师英语',
    description: '用自然、准确而简洁的英语汇报进展、风险、阻塞和下一步。',
  },
  {
    title: 'Code Review English',
    category: '工程师英语',
    description: '学习如何提出建议、解释取舍、回应评论，而不是只会说 looks good。',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <p className={styles.eyebrow}>English Bible for Chinese Engineers</p>
        <Heading as="h1" className={styles.heroTitle}>
          理解英语，而不是死记英语
        </Heading>
        <p className={styles.heroSubtitle}>
          为中国工程师打造的实用英语知识库：讲清楚英语为什么这样说，
          并用真实工作、面试和生活场景帮助你建立英语思维。
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            开始学习
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="https://github.com/jackcc999/eb4ce">
            在 GitHub 查看
          </Link>
        </div>
        <p className={styles.tagline}>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function LearningPath() {
  return (
    <section className={styles.learningPath}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">从哪里开始？</Heading>
          <p>按照重要性逐步建立完整、可复用的英语表达体系。</p>
        </div>
        <div className={styles.pathGrid}>
          <Link className={styles.pathCard} to="/docs/intro">
            <span className={styles.pathNumber}>01</span>
            <Heading as="h3">英语句子的骨架</Heading>
            <p>掌握主语、谓语、宾语、be、have 和 There be。</p>
          </Link>
          <Link className={styles.pathCard} to="/docs/intro">
            <span className={styles.pathNumber}>02</span>
            <Heading as="h3">核心时态与结构</Heading>
            <p>理解 be doing、have done、had done 和 be going to。</p>
          </Link>
          <Link className={styles.pathCard} to="/docs/intro">
            <span className={styles.pathNumber}>03</span>
            <Heading as="h3">工程师真实场景</Heading>
            <p>练习会议、Slack、邮件、代码评审和技术面试表达。</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

function PopularTopics() {
  return (
    <section className={styles.popularSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>POPULAR TOPICS</span>
          <Heading as="h2">最值得先学的主题</Heading>
          <p>优先解决中文母语者最容易混淆、工程师工作中又最常用的问题。</p>
        </div>
        <div className={styles.topicGrid}>
          {popularTopics.map((topic) => (
            <article className={styles.topicCard} key={topic.title}>
              <span className={styles.topicCategory}>{topic.category}</span>
              <Heading as="h3">{topic.title}</Heading>
              <p>{topic.description}</p>
              <span className={styles.comingSoon}>逐步更新中</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className={styles.missionSection}>
      <div className="container">
        <div className={styles.missionCard}>
          <div>
            <span className={styles.sectionLabel}>WHY EB4CE</span>
            <Heading as="h2">不是另一本传统语法书</Heading>
            <p>
              EB4CE 不只告诉你什么是正确答案，还会解释为什么这样表达、
              中国人为什么容易说错，以及英语母语者真正关注的信息是什么。
            </p>
          </div>
          <div className={styles.missionPoints}>
            <div><strong>What</strong><span>这个结构是什么</span></div>
            <div><strong>When</strong><span>真实场景中什么时候用</span></div>
            <div><strong>Why</strong><span>为什么英语要这样组织信息</span></div>
            <div><strong>Mistakes</strong><span>中文思维最容易造成什么错误</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OpenSourceCallout() {
  return (
    <section className={styles.openSourceSection}>
      <div className="container">
        <div className={styles.openSourceCard}>
          <div>
            <span className={styles.sectionLabel}>OPEN SOURCE</span>
            <Heading as="h2">一本持续成长的工程师英语在线书</Heading>
            <p>
              内容将从基础语法逐步扩展到会议、代码评审、邮件、面试和 AI 技术讨论。
              所有内容开源，欢迎一起改进。
            </p>
          </div>
          <div className={styles.openSourceActions}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              阅读第一章
            </Link>
            <Link
              className="button button--outline button--primary button--lg"
              to="https://github.com/jackcc999/eb4ce/issues">
              提交建议
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="中国工程师实用英语知识库"
      description="English Bible for Chinese Engineers：帮助中国工程师理解英语语法、常用句型和硅谷工作表达，建立英语思维。">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <LearningPath />
        <PopularTopics />
        <Mission />
        <OpenSourceCallout />
      </main>
    </Layout>
  );
}
