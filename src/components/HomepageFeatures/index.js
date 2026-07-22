import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    icon: '🧠',
    title: '理解，而不是死记',
    description: (
      <>
        不只告诉你语法规则，还解释为什么母语者会这样表达，帮助你真正建立英语思维。
      </>
    ),
  },
  {
    icon: '💼',
    title: '真实工程师英语',
    description: (
      <>
        覆盖 Standup、Slack、邮件、代码评审、系统设计、技术面试和 AI 项目讨论。
      </>
    ),
  },
  {
    icon: '🇨🇳',
    title: '专为中文母语者设计',
    description: (
      <>
        每个知识点都解释中文思维为什么容易导致错误，并给出更自然、更地道的表达方式。
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon} aria-hidden="true">
          {icon}
        </div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">为什么选择 EB4CE？</Heading>
          <p>不是传统语法书，而是一套面向中国工程师的实用英语系统。</p>
        </div>
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
