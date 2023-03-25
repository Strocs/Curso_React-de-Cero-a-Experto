export function getFormatDate(timestamp) {
  const options = { day: 'numeric', month: 'long', year: 'numeric' }
  const date = new Date(timestamp)
  const dateString = date.toLocaleDateString('es-ES', options)
  return dateString
}
