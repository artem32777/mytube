import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { IVideo } from "@/types/types";

const enum API {
  url = 'https://youtube.googleapis.com/youtube/v3/',
  key = '&key=AIzaSyDUp5wRCbP--9drrQ9tCA-Ubac1_x1bvhQ',
}
export const enum VIDEO_QUERY{
  default = 'videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=RU',
  search = 'search?part=snippet&maxResults=20&q='
}


export const useVideoStore = defineStore('video', () => {
  const video = ref<IVideo[] | []>([])
  // const isVideoLoaded = computed(() => video.value.length > 0)
  async function getData(query: string) {
    const queryString = API.url + query + API.key
    try {
      const response = await fetch(queryString)
      if (!response.ok) {
        console.log(response.statusText)
        return
      }
      const result = await response.json()
      video.value = result.items
      console.log( video.value);
    } catch (e) {
      alert(e)
    }
  }

  async function getDefaultData(){
    await getData(VIDEO_QUERY.default)
  }

  async function getSearchData(query: string) {
    await getData(VIDEO_QUERY.search + query)
  }


  return {
    video,
    // isVideoLoaded,
    getDefaultData,
    getSearchData
  }
})
