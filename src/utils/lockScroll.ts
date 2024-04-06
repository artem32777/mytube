export let bodyLockStatus: boolean = true

export const bodyLockToggle = (delay: number = 500): void => {
  if (document.documentElement.classList.contains('lock')) {
    bodyUnlock(delay)
  } else {
    bodyLock(delay)
  }
}
export const bodyUnlock = (delay: number = 500): void => {
  const body = document.querySelector('body')
  if (bodyLockStatus && body) {
    const locked_elements: NodeListOf<HTMLElement> = document.querySelectorAll('[data-lp]')
    if (!locked_elements) return
    setTimeout((): void => {
      for (let index = 0; index < locked_elements.length; index++) {
        const el = locked_elements[index]
        el.style.paddingRight = '0px'
      }
      body.style.paddingRight = '0px'
      document.documentElement.classList.remove('lock')
    }, delay)
    bodyLockStatus = false
    setTimeout(function (): void {
      bodyLockStatus = true
    }, delay)
  }
}

export const bodyLock = (delay: number = 500): void => {
  const body = document.querySelector('body')
  const wrapper = document.querySelector('#app') as HTMLElement
  if (!body || !wrapper) return

  const locked_elements: NodeListOf<HTMLElement> = document.querySelectorAll('[data-lp]')
  if (!locked_elements.length) return

  const paddingRight = window.innerWidth - wrapper.offsetWidth + 'px'
  locked_elements.forEach((el) => (el.style.paddingRight = paddingRight))
  body.style.paddingRight = paddingRight
  document.documentElement.classList.add('lock')

  bodyLockStatus = false
  setTimeout(() => {
    bodyLockStatus = true
  }, delay)
}


export const truncateTitle = (title: string): string => {

  const words = title.split(' ');

  let truncatedTitle = '';
  let length = 0;
  let wordCount = 0;
  for (const word of words) {
    if (length + word.length <= 30 && wordCount < 7) {
      truncatedTitle += word + ' ';
      length += word.length;
      wordCount++;
    } else {
      break;
    }
  }

  truncatedTitle = truncatedTitle.trim();
  if (title.length !== truncatedTitle.length) {
    truncatedTitle += '...';
  }

  return truncatedTitle;
}
