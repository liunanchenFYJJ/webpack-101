const loaderUtils = require('loader-utils')

// return a Buffer or String
module.exports = function(content) {
  const options = this.getOptions()
  console.log(options)
  if (this.cacheable) {
    this.cacheable();
  }
  
  var prefix = "\"use strict\";"
  console.log(typeof content)
  return prefix + content;
}