import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { chapterGroups, chapters, READING_PROGRESS_KEY } from './bookData'
import styles from './HomeLanding.module.css'

type ReadingProgress = {
  href: string
  label: string
}

export default function HomeLanding() {
  const [lastChapter, setLastChapter] = useState<ReadingProgress | null>(null)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(READING_PROGRESS_KEY)
      if (!stored) return

      const progress = JSON.parse(stored) as ReadingProgress
      const href = progress.href
        .replace(/^\/story\/(chapter-\d{2})$/, '/$1')
        .replace(/^\/story\/epilogue$/, '/epilogue')
      const chapter = chapters.find((item) => item.href === href)

      if (chapter) {
        const normalized = {
          href,
          label: `${chapter.kicker} · ${chapter.title}`,
        }
        setLastChapter(normalized)
        window.localStorage.setItem(READING_PROGRESS_KEY, JSON.stringify(normalized))
      }
    } catch {
      // A damaged local preference should never block the book homepage.
    }
  }, [])

  return (
    <>
      <Head>
        <title>海峡尽头：2027 中美战争</title>
        <meta
          name="description"
          content="一部以公开军力资料为背景，书写命令、距离、补给与停火的架空战争小说。"
        />
      </Head>

      <div className={styles.home}>
        <header className={styles.header}>
          <Link href="/" className={styles.brand} aria-label="返回《海峡尽头》首页">
            <img src="/docs/favicon-32x32.png" width="28" height="28" alt="" />
            <span>海峡尽头</span>
          </Link>
          <nav className={styles.nav} aria-label="主要导航">
            <a href="#catalog">全书目录</a>
            <Link href="/forces">公开兵力</Link>
            <Link href="/actors">周边态势</Link>
            <Link href="/about">关于本书</Link>
          </nav>
          <Link href={lastChapter?.href ?? '/story'} className={styles.headerAction}>
            {lastChapter ? '继续阅读' : '开始阅读'}
          </Link>
        </header>

        <main>
          <section className={styles.hero}>
            <div className={styles.heroGlow} aria-hidden="true" />
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <p className={styles.overline}>架空战争长篇 · 全书已完结</p>
                <h1>
                  <span>海峡尽头</span>
                  <em>2027 中美战争</em>
                </h1>
                <p className={styles.lead}>
                  海峡并不宽。真正堆积在水面上的，是几十年的记忆、承诺、恐惧与互不相让。
                </p>
                <p className={styles.intro}>
                  从一句越过政治红线的演说开始，东京、平壤、莫斯科和华盛顿被各自的同盟、焦虑与误判拖向战场。决定战争长度的，不只是舰艇、飞机和导弹，还有距离、补给、工业，以及谁肯在核门槛前先停一步。
                </p>

                <div className={styles.actions}>
                  <Link href={lastChapter?.href ?? '/story'} className={styles.primaryAction}>
                    <span>{lastChapter ? '继续上次阅读' : '从序章开始'}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                  <a href="#catalog" className={styles.secondaryAction}>浏览完整目录</a>
                </div>

                {lastChapter && (
                  <p className={styles.lastRead}>上次读到：{lastChapter.label}</p>
                )}

                <dl className={styles.stats}>
                  <div><dt>篇章</dt><dd>14 章 + 序尾</dd></div>
                  <div><dt>时间</dt><dd>2027—2037</dd></div>
                  <div><dt>状态</dt><dd>全书完结</dd></div>
                </dl>
              </div>

              <div className={styles.coverStage}>
                <div className={styles.coverBack} aria-hidden="true" />
                <figure className={styles.cover}>
                  <img
                    src="/docs/illustrations/cover.png"
                    alt="《海峡尽头：2027 中美战争》封面：雨夜海峡、远处舰影与一副受损的值更耳机"
                  />
                  <figcaption>一部关于命令离开会议室以后，会发生什么的小说</figcaption>
                </figure>
              </div>
            </div>
            <a className={styles.scrollHint} href="#premise" aria-label="继续向下阅读">
              <span>向下</span><i aria-hidden="true" />
            </a>
          </section>

          <section className={styles.premise} id="premise">
            <div className={styles.sectionHeading}>
              <p>Story</p>
              <h2>所谓“最后一战”，最难的不是开始</h2>
            </div>
            <div className={styles.premiseGrid}>
              <blockquote><p>“我想写的并不是一张不断扩大的战果表，而是命令离开会议室以后发生的事。”</p></blockquote>
              <div className={styles.premiseText}>
                <p>雷达屏幕上的光点怎样变成某个家庭迟迟等不到的电话；远在海外的人如何借一段视频维持权威；胜利者又怎样面对停火、接管、审判和漫长的日常生活。</p>
                <p>这是一部架空小说，不是战争预测。真实单位、舰艇、舷号、番号及装备型号只用于营造时代背景，故事中的编组、部署、命令、交火、损伤和伤亡均为小说设定。</p>
              </div>
            </div>
          </section>

          <section className={styles.catalog} id="catalog">
            <div className={styles.sectionHeading}>
              <p>Contents</p>
              <h2>全书目录</h2>
              <span>四部 · 十六个叙事节点</span>
            </div>

            <div className={styles.volumes}>
              {chapterGroups.map((group, groupIndex) => (
                <article className={styles.volume} key={group.title}>
                  <div className={styles.volumeIntro}>
                    <span>{group.eyebrow}</span>
                    <strong>{String(groupIndex + 1).padStart(2, '0')}</strong>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                  <ol className={styles.chapterList}>
                    {group.chapters.map((chapter) => (
                      <li key={chapter.href}>
                        <Link href={chapter.href}>
                          <span>{chapter.kicker}</span>
                          <strong>{chapter.title}</strong>
                          <i aria-hidden="true">→</i>
                        </Link>
                      </li>
                    ))}
                  </ol>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.endCta}>
            <p>海峡上空已经安静得反常。</p>
            <h2>等第一句台词变成倒计时。</h2>
            <Link href="/story" className={styles.primaryAction}>
              <span>进入序章</span><span aria-hidden="true">→</span>
            </Link>
          </section>
        </main>

        <footer className={styles.footer}>
          <div><strong>海峡尽头</strong><span>2027 中美战争</span></div>
          <p>架空小说 · 公开资料不等于实时情报</p>
          <nav aria-label="页脚导航">
            <Link href="/forces">资料口径</Link>
            <Link href="/about">事实与虚构</Link>
          </nav>
        </footer>
      </div>
    </>
  )
}
