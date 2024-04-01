import './cln.css';
import _ from 'lodash';
import broadcast from '../common/global';

export default function addContent () {
  const a = _.add(2, 3);
  console.log(a)
  const time = new Date().getSeconds()
  // document.write('hello, i am using a webpack.config.js' + time)
  broadcast()
}