// import addContent from "./src/index/add-content";
import('./src/index/add-content').then((addContentModule) => {
  // console.log('s', addContentModule.default())
  // addContentModule.default()
  (0,addContentModule['default'])()
})

console.log('index>>')
// document.write('my first webpack app <br>')
// addContent()