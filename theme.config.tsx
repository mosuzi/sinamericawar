import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

function Head() {
  const { title } = useConfig()
  const pageTitle = title === '2027：海峡尽头'
    ? title
    : `${title} – 2027：海峡尽头`

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content="以公开军力资料为背景的架空中美战争小说。" />
    </>
  )
}

const config: DocsThemeConfig = {
  logo: <span>2027：海峡尽头</span>,
  project: {
    link: 'https://github.com/mosuzi/sinamericawar',
  },
  docsRepositoryBase: 'https://github.com/mosuzi/sinamericawar/tree/main',
  footer: {
    content: '架空小说 · 公开资料不等于实时情报',
  },
  head: Head,
}

export default config
