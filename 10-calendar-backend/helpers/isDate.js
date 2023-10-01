const isDate = value => {
  if (!value) {
    return false
  }

  const date = new Date(value)

  if (isNaN(date.getTime())) {
    return false
  }

  return true
}

module.exports = {
  isDate
}
