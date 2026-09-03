import React from 'react'
import Image from 'next/image'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

function Head() {
  const { title } = useConfig()
  const pageTitle = title === '海峡尽头：2027 中美战争'
    ? title
    : `${title} – 海峡尽头：2027 中美战争`

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content="以公开军力资料为背景的架空中美战争小说。" />
      <meta name="theme-color" content="#07182e" />
      <meta name="apple-mobile-web-app-title" content="海峡尽头" />
      <link rel="icon" href="/docs/favicon.ico" sizes="any" />
      <link rel="icon" href="/docs/favicon-32x32.png" type="image/png" sizes="32x32" />
      <link rel="icon" href="/docs/favicon-16x16.png" type="image/png" sizes="16x16" />
      <link rel="apple-touch-icon" href="/docs/apple-touch-icon.png" sizes="180x180" />
      <link rel="manifest" href="/docs/site.webmanifest" />
    </>
  )
}

const config: DocsThemeConfig = {
  logo: (
    <span style={{ alignItems: 'center', display: 'inline-flex', gap: '0.5rem' }}>
      <Image
        src="/docs/favicon-32x32.png"
        alt=""
        aria-hidden="true"
        width={24}
        height={24}
        priority
      />
      <span>海峡尽头：2027 中美战争</span>
    </span>
  ),
  project: {
    link: 'https://github.com/mosuzi/sinamericawar',
  },
  docsRepositoryBase: 'https://github.com/mosuzi/sinamericawar/tree/main',
  toc: {
    title: '本页目录',
  },
  feedback: {
    content: null,
  },
  editLink: {
    component: null,
  },
  footer: {
    content: '架空小说 · 公开资料不等于实时情报',
  },
  head: Head,
}

export default config
