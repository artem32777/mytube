// import type { IVideo } from "@/types/types";
//
// const enum API_DATA {
//   url = 'https://youtube.googleapis.com/youtube/v3/',
//   key = 'AIzaSyDUp5wRCbP--9drrQ9tCA-Ubac1_x1bvhQ',
//   test = 'videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=RU&key=',
// }
//
//
// // const urlString = API_DATA.url + API_DATA.test + API_DATA.key
// export const fetchDefaultData = async (): Promise<IVideo[] | undefined> => {
//   try{
//     const response = await fetch(`${API_DATA.url + API_DATA.test + API_DATA.key}`)
//     if (!response.ok) {
//       console.log(response.statusText);
//       return
//     }
//     let result = await response.json()
//     return result.items
//   } catch(e) {
//      alert(e)
//   }
// }
//
//
// // export const fetchSearchData = async (query: string) => {
// //   try{
// //     const response = await fetch(`${API_DATA.url + API_DATA.test + API_DATA.key}&q=${query}`)
// //     if (!response.ok) {
// //       console.log(response.statusText);
// //       return
// //     }
// //     let result = await response.json()
// //     return result.items
// //   } catch(e) {
// //      alert(e)
// //   }
// //
// // }
//
