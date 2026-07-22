import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

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

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title="中国工程师实用英语知识库"
      description="English Bible for Chinese Engineers：帮助中国工程师理解英语语法、常用句型和硅谷工作表达，建立英语思维。">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <LearningPath />
      </main>
    </Layout>
  );
}
