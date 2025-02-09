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
