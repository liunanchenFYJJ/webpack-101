// import './add-content.css';
import _ from 'lodash';

export default function addContent () {
  // const a = _.add(2, 3);
  // console.log(a)
  const time = new Date().getSeconds()
  document.write('hello cln, i am using a webpack.config.js' + time)
}