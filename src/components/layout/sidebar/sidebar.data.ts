import type { IMenuItem } from '@/types/types'

export type ISideBarItemTitles = (typeof SIDEBAR_ITEMS)[number]['title']

export const SIDEBAR_ITEMS: IMenuItem[] = [
  { title: 'Home', url: '#', icon: 'home' },
  { title: 'Trending', url: '#', icon: 'fire' },
  { title: 'Subscriptions', url: '#', icon: 'subscribe' },
  { title: 'Library', url: '#', icon: 'library' },
  { title: 'History', url: '#', icon: 'clock' },
  { title: 'Music', url: '#', icon: 'music' },
  { title: 'Sports', url: '#', icon: 'sports' },
  { title: 'Gaming', url: '#', icon: 'gaming' },
  { title: 'Movies', url: '#', icon: 'movies' },
  { title: 'Live', url: '#', icon: 'live' },
  { title: 'Video', url: '#', icon: 'eye' },
  { title: 'News', url: '#', icon: 'news' },
  { title: 'Browse channels', url: '#', icon: 'plus' },
  { title: 'YouTube Premium', url: '#', icon: 'youtube' },
  { title: 'Settings', url: '#', icon: 'gear' },
  { title: 'Report history', url: '#', icon: 'flag' },
  { title: 'Help', url: '#', icon: 'question' },
  { title: 'Send feedback', url: '#', icon: 'quote' },
]

export const SIDEBAR_FOOTER_LINKS: { title: string; url: string }[] = [
  { title: 'About', url: '#' },
  { title: 'Press', url: '#' },
  { title: 'Copyright', url: '#' },
  { title: 'Contact us', url: '#' },
  { title: 'Creators', url: '#' },
  { title: 'Advertise', url: '#' },
  { title: 'Developers', url: '#' },
  { title: 'Terms', url: '#' },
  { title: 'Privacy', url: '#' },
  { title: 'Policy & Safety', url: '#' },
  { title: 'How YouTube works', url: '#' },
  { title: 'Test new features', url: '#' },
]
