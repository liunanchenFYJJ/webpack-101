import _ from 'lodash';
import broadcast from '../common/global';
import '../index/cln.css'

console.log('app>>')
export default function log() {
  const min = _.add(5, 3)
  console.log(min);
  broadcast();
}