import React from "react"
import ReactDom from "react-dom/client"

import './style.less'

type Msg = {
  index: number;
  title: string;
  body: string;
}

const sampleMsg: Msg = {
  index: 1,
  title: 'sample',
  body: 'body content',
}

const App = () => {
  return <div>
    <h1>{ sampleMsg.title }</h1>
    <p>{ sampleMsg.body }</p>
  </div>
}

ReactDom.createRoot(document.querySelector('#app')).render(App())


console.log('hello webpack01')