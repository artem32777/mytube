import { ICONS } from '@/components/ui/icons.data'

export type IVideoThumbnail = {
  url: string
  width: number
  height: number
}

export interface IVideo {
  id: string
  snippet: {
    title: string
    description: string
    channelTitle: string
    categoryId: string
    publishedAt: string
    thumbnails: {
      default: IVideoThumbnail
      medium: IVideoThumbnail
      high: IVideoThumbnail
      standard: IVideoThumbnail
      maxres: IVideoThumbnail
    }
  }
  contentDetails: {
    duration: string
    dimension: string
    licensedContent: boolean
  }
  statistics: {
    viewCount: string
    favoriteCount: string
    commentCount: string
  }
}

export interface IMenuItem {
  title: string
  url: string
  icon?: keyof typeof ICONS
  subMenu?: boolean
}

export interface IHeaderMenuApps {
  main: IMenuItem[]
  secondary: IMenuItem[]
  additional: IMenuItem[]
}
