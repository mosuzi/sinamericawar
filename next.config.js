const withNextra = require('nextra').default({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  basePath: '/docs',
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      ...Array.from({ length: 14 }, (_, index) => {
        const chapter = String(index + 1).padStart(2, '0')
        return {
          source: `/story/chapter-${chapter}`,
          destination: `/chapter-${chapter}`,
          permanent: true,
        }
      }),
      {
        source: '/story/epilogue',
        destination: '/epilogue',
        permanent: true,
      },
    ]
  },
})
