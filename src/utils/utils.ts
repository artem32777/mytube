import { useWindowSize } from '@vueuse/core'
const { width, height } = useWindowSize()

export const setDropdownPosition = (dropdownArea: any, click: MouseEvent): void => {
  const area = dropdownArea.value
  height.value - click.pageY <= area.offsetHeight
    ? (area.style.bottom = 'calc(100% + 5px)')
    : (area.style.top = 'calc(100% + 5px)')

  width.value - click.pageX <= area.offsetWidth
    ? (area.style.right = 'calc(100% - 70px)')
    : (area.style.left = 'calc(100% - 4 0px)')
}

export const formatViews = (views: string): string => {
  const numViews: number = +views;
  if (isNaN(numViews)) return 'Неизвестное кол-во просмотров';
  if (numViews < 1000) return `${numViews} просмотр${endWord(numViews)}`;
  if (numViews < 1000000) return `${Math.floor(numViews / 1000)} тыс. просмотров`;
  return `${Math.floor(numViews / 1000000)} млн просмотров`;

  function endWord(number: number): string {
    if (number === 1) return '';
    if (number > 1 && number < 5) return 'а';
    return 'ов';
  }
}

export const formatDateDifference = (dateString: string): string => {
  const date = new Date(dateString)
  const difference = Date.now() - date.getTime()
  const daysDifference = Math.floor(difference / (1000 * 3600 * 24))
  const yearsDifference = Math.floor(daysDifference / 365)

  if (daysDifference < 1) return 'Сегодня'
  if (daysDifference === 1) return 'Вчера'
  if (daysDifference <= 364)
    return `${daysDifference} ${daysDifference === 1 ? 'день' : 'дня'} назад`
  if (daysDifference >= 365 && daysDifference < 730) return '1 год назад'
  return `${yearsDifference} год${yearsDifference > 1 && yearsDifference < 5 ? 'а' : 'ов'} назад`
}
