export type Chapter = {
  href: string
  kicker: string
  title: string
}

export type ChapterGroup = {
  eyebrow: string
  title: string
  description: string
  chapters: Chapter[]
}

export const READING_PROGRESS_KEY = 'strait-end:last-chapter'

export const chapterGroups: ChapterGroup[] = [
  {
    eyebrow: '第一部',
    title: '倒计时',
    description: '一句越过红线的演说，把海峡两岸推入无法撤回的四十八小时。',
    chapters: [
      { href: '/story', kicker: '序章', title: '一句话变成倒计时' },
      { href: '/chapter-01', kicker: '第一章', title: '封控日' },
      { href: '/chapter-02', kicker: '第二章', title: '七十二小时' },
      { href: '/chapter-03', kicker: '第三章', title: '东京的第三份文件' },
      { href: '/chapter-04', kicker: '第四章', title: '第一枪的三个版本' },
    ],
  },
  {
    eyebrow: '第二部',
    title: '外溢',
    description: '战火越过海峡，同盟、补给线与各国自己的战争彼此缠绕。',
    chapters: [
      { href: '/chapter-05', kicker: '第五章', title: '朝鲜选择自己的战争' },
      { href: '/chapter-06', kicker: '第六章', title: '岛上的承诺开始破产' },
      { href: '/chapter-07', kicker: '第七章', title: '俄罗斯护航线' },
      { href: '/chapter-08', kicker: '第八章', title: '美国仍然没有参战' },
    ],
  },
  {
    eyebrow: '第三部',
    title: '最后一个大国',
    description: '最强大的军队进入战场，却没有任何一方拥有完整的天空。',
    chapters: [
      { href: '/chapter-09', kicker: '第九章', title: '最后一个大国' },
      { href: '/chapter-10', kicker: '第十章', title: '没有完整制空权的天空' },
      { href: '/chapter-11', kicker: '第十一章', title: '台湾战役结束' },
    ],
  },
  {
    eyebrow: '第四部',
    title: '和平的名单',
    description: '战役结束以后，胜利、停火、接管和记忆才真正开始。',
    chapters: [
      { href: '/chapter-12', kicker: '第十二章', title: '胜利以后怎么办' },
      { href: '/chapter-13', kicker: '第十三章', title: '十四分钟' },
      { href: '/chapter-14', kicker: '第十四章', title: '名单上的和平' },
      { href: '/epilogue', kicker: '尾声', title: '十年以后' },
    ],
  },
]

export const chapters = chapterGroups.flatMap((group) => group.chapters)
