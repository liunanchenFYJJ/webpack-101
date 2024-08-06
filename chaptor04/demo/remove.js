module.exports = function(content, map, meta) {
  console.log('remove', map);
  if (typeof content === 'string') {
    const reg = /console.log\(.*\)/
    // console.log(content.match(reg))
    content = content.replace(reg, "// remove console.log")
  }

  // this.callback(
  //   null,
  //   content,
  //   {}
  // )
  return content
}