module.exports = {
  print(value) {
    let result = value.replace(/(\r\n|\r|\n)+/g, '')
    result = result.replace(/\s{2,}/g, ' ')

    return '"' + result + '"'
  },

  test(value) {
    return typeof value === 'string'
  },
}
