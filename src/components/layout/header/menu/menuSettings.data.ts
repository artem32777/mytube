import type { IMenuItem } from '@/types/types'

export type IMenuSettingsItemTitles = typeof MENU_SETTINGS_ITEMS[number]['title']

export const MENU_SETTINGS_ITEMS: IMenuItem[] = [
  { title: 'Appearance: Light', icon: 'theme', url: '#', subMenu: true },
  { title: 'Language: English', icon: 'language', url: '#', subMenu: true },
  { title: 'Location: Russia', icon: 'location', url: '#', subMenu: true },
  { title: 'Settings', icon: 'gear', url: '#' },
  { title: 'Your data in YouTube', icon: 'shield', url: '#' },
  { title: 'Help', icon: 'question', url: '#' },
  { title: 'send feedback', icon: 'quote', url: '#' },
  { title: 'Keyboard shortcuts', icon: 'calc', url: '#' },
  { title: 'Restricted Mode: Off', url: '#', subMenu: true }
]
