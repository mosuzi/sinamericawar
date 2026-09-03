import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { chapters, READING_PROGRESS_KEY } from './bookData'

const chapterByHref = new Map(chapters.map((chapter) => [chapter.href, chapter]))

export default function ReadingTracker() {
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) return

    const href = router.asPath
      .replace(/^\/docs/, '')
      .split(/[?#]/, 1)[0]
      .replace(/\/$/, '') || '/'
    const chapter = chapterByHref.get(href)

    if (chapter) {
      window.localStorage.setItem(
        READING_PROGRESS_KEY,
        JSON.stringify({ href, label: `${chapter.kicker} · ${chapter.title}` }),
      )
    }
  }, [router.asPath, router.isReady])

  return null
}
