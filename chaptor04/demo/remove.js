module.exports = function(content) {
  if (typeof content === 'string') {
    const reg = /console.log\(.*\)/
    console.log(content.match(reg))
    content = content.replace(reg, "// remove console.log")
  }

  return content
}