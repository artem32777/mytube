import type { IMenuItem } from '@/types/types'

export type ICategoriesTitles = typeof CATEGORIES_DATA[number]['title']

export const CATEGORIES_DATA: IMenuItem[] = [
  { title: 'All', url: '#' },
  { title: 'Trucks', url: '#' },
  { title: 'Tools', url: '#' },
  { title: 'Machines', url: '#' },
  { title: 'Engines', url: '#' },
  { title: 'Snow', url: '#' },
  { title: 'Ships', url: '#' },
  { title: 'Roads', url: '#' },
  { title: 'Tanks', url: '#' },
  { title: 'Building', url: '#' },
  { title: 'Mars', url: '#' },
  { title: 'Woodworking', url: '#' },
  { title: 'Tractors', url: '#' },
  { title: 'Songs', url: '#' },
  { title: 'TV Show', url: '#' },
  { title: 'Football', url: '#' },
  { title: 'Planes', url: '#' },
  { title: 'Live', url: '#' },
  { title: 'Streets', url: '#' },
  { title: 'Math', url: '#' },
  { title: 'Programming', url: '#' },
]
