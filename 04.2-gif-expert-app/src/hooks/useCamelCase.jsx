export const useCamelCase = string => {
  const camelCasedText = string
    .trim()
    .split(' ')
    .map(str => str[0].toUpperCase() + str.slice(1))
    .join(' ')
  return {
    camelCasedText
  }
}
