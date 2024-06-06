import logo from './logo.svg';
import './App.css';
import { Button } from 'antd'
import TextAreaCounter from './TextAreaCounter';
import Table from './Table'
import { useState } from 'react';

function App() {
  const columns = [
    { field: 'Id' },
    { field: 'Book' },
    { field: 'Author(s)' },
    { field: 'Operator' },
  ]

  const data = [
    { 'Id': 1, 'Book': 'aa', 'Author(s)': 'C', 'Operator': null },
    { 'Id': 2, 'Book': 'cc', 'Author(s)': 'B', 'Operator': null },
    { 'Id': 3, 'Book': 'bb', 'Author(s)': 'A', 'Operator': null },
  ]
  const [list, setList] = useState(data)
  
  function addOneLine() {
    setList(
      [
        ...list,
        { 'Id': list.length + 1, 'Book': 'ee', 'Author(s)': 'ff', 'Operator': null },
      ]
    )
  }

  return (
    <div className="App">
      <Table columns={ columns } data={ list }></Table>
      <Button type='primary' onClick={() => addOneLine()}>add one line</Button>
      {/* <TextAreaCounter defaultVal={'10'}></TextAreaCounter> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
