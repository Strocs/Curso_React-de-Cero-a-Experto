export function getMonthString(timestamp) {
  const options = { month: 'long' }
  const date = new Date(timestamp)
  const month = date.toLocaleString('es-ES', options)
  return month
}
