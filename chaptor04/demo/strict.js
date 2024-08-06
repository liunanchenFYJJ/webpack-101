const loaderUtils = require('loader-utils');
const { SourceMapConsumer, SourceNode } = require('source-map');

// console.log(loaderUtils);

// return a Buffer or String
module.exports = function(content, sourceMap) {
  var prefix = "\"use strict\";"
  this.cacheable && this.cacheable();
  const options = this.getOptions() || {};


  

  
  if (!sourceMap) {
    console.log('no');
    return prefix + content;
    // this.callback(
    //   null,
    //   prefix + content,
    //   null,
    // );
    // return;
  }
  // console.log('yes');
  // var currentRequest = loaderUtils.getCurrentRequest(this);
  // console.log(this.remainingRequest);
  // console.log('m>>', new SourceMapConsumer(sourceMap));
  // var node = SourceNode.fromStringWithSourceMap(content, new SourceMapConsumer(sourceMap));
  // node.prepend(prefix);
  // var result = node.toStringWithSourceMap({ file: currentRequest });

  // this.callback(
  //   null,
  //   result,
  //   mappedSourceMap,
  // )
}