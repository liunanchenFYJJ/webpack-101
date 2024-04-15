import Vue from "vue/dist/vue.js"

export default function mainVue() {
  const dom = Vue.createElement('div', null, 'cln')
  console.log(dom)
  
  const template = `
  <ul>
    <li v-for="item in items">
      {{ item }}
    </li>
  </ul>`;
  
  const compiledTemplate = Vue.compile(template);
  
  new Vue({
    el: '#app',
    data() {
      return {
        items: ['Item1', 'Item2']
      }
    },
    render(createElement) {
      return compiledTemplate.render.call(this, createElement);
    }
  });
  
  console.log('ss', compiledTemplate)
  
  const div = document.createElement('div')
  console.log(div instanceof HTMLDivElement)

}
