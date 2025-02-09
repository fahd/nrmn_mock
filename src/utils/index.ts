export const formatDate = (isoString: string): string => {
  const date = new Date(isoString)
  return date.toLocaleDateString('en-US', {
    weekday: 'short', // "Fri"
    year: 'numeric', // "2025"
    month: 'short', // "Feb"
    day: 'numeric', // "7"
  })
}
export const upperCase = (s: string) => {
  return s[0].toUpperCase() + s.slice(1)
}

export const isContentEmpty = (html: string) => {
  return html.replace(/<br>|<div>|<\/div>|&nbsp;/g, '').trim().length === 0
}

export const handleInput = (
  event: React.FormEvent<HTMLDivElement>,
  onChange
) => {
  const element = event.currentTarget
  onChange(element.innerHTML)

  if (isContentEmpty(element.innerHTML)) {
    element.innerHTML = ''
  }

  element.style.height = 'auto'
  element.style.height = element.scrollHeight + 'px'
}
