import { Component } from "react";
import PropTypes from 'prop-types'

export default class Table extends Component {

  // static displayName = 'cln-custom-table'

  static defaultProp = {
    columns: [],
    data: [],
  }

  constructor(props) {
    super(props)
    this.state = {
      columns: this.props.columns,
      data: this.props.data,

      sortBy: null,
      sortOrder: true,

      edit: {
        colIdx: null,
        rowIdx: null,
      },

      // logs: [],
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.data !== prevProps.data) {
      this.setState({
        // columns: this.props.columns,
        data: this.props.data,
      })
    }
  }
  
  setLog(newState) {
    this.state.logs.push(JSON.parse(JSON.stringify(newState)))
  }

  undo() {
    const state = this.state.logs.length ? this.state.logs.splice(this.state.logs.length - 1, 1) : null;
    if (state) {
      this.setState(state[0])
    }
  }
  
  render() {
    const opI = this.state.columns.findIndex(col => col.field === 'Operator')
    
    const thead = this.state.columns.map((col, colI) => {
      const { field } = col;
      let icon = '';
      if (this.state.sortBy === field ) {
        icon = this.state.sortOrder ? '\u2191' : '\u2193';
      }
      return (
        <th key={colI} onClick={(e) => this.handleSort(e, field)}>{ col.field + icon }</th>
      )
    })

    const tbody = this.state.data.map((d, i) => {
      const tds = Object.keys(d).map((dk, di) => {
        if (di === opI) {
          return <td key={di} data-rowidx={i} onClick={(e) => this.handleDel(e)}>{ '\u266B' }</td>
        } else {
          if (i === this.state.edit.rowIdx && di === this.state.edit.colIdx) {
            return (
              <td key={di}>
                <input autoFocus defaultValue={d[dk]} onKeyDown={(e) => this.handleSave(e)} />
              </td>
            )
          }
          return (
            <td key={di} data-rowidx={i} onDoubleClick={(e) => this.handleEdit(e)}>{d[dk]}</td>
          )
        }
      })
      return (
        <tr key={i}>
          {tds}
        </tr>
      )
    })

    return (
      <>
        <input onInput={(e) => this.handleSearch(e)} />
        <button onClick={() => this.undo()}>{ '\u21BB' }</button>
        <a href="data.json" onClick={(e) => this.handleDownload(e, 'json')}>download as JSON</a>
        <a href="data.csv" onClick={(e) => this.handleDownload(e, 'csv')}>download as CSV</a>
        <table>
          <thead>
            <tr>
              {thead}
            </tr>
          </thead>

          <tbody>
            {tbody}
          </tbody>

          {/* <tfoot>
            <th scope="row">Goldenrod</th>
            <td><code>#F6BC57</code></td>
            <td><code>hsla(38, 90%, 65%, 1)</code></td>
            <td><code>rgba(246, 188, 87, 1)</code></td>
          </tfoot> */}
        </table>
      </>
    )
  }

  handleDownload(e, format) {
    let content = '';
    if (format === 'json') {
      content = JSON.stringify(this.state.data, null, 2)
    }
    if (format === 'csv') {
      content = this.state.data.reduce((str, row) => {
        str += (Object.values(row).join(',') + '\n')
        return str;
      }, '')
    }

    var URL = window.URL || window.webkitURL;
    var blob = new Blob([content], { type: 'text/' + format })
    e.target.href = URL.createObjectURL(blob)
    e.target.download = 'data.' + format;
  }

  handleSort(e, field) {

    const a = this.state.data.toSorted((a, b) => {
      return this.state.sortOrder ? (
        a[field] > b[field] ? -1 : 1
      ) : (
        a[field] > b[field] ? 1 : -1
      )
    })
    this.setState({
      data: a,
      sortBy: field,
      sortOrder: !this.state.sortOrder,
    })
  }

  handleEdit(e) {
    const colIdx = e.target.cellIndex;
    const rowIdx = e.target.dataset.rowidx;

    this.setState({
      edit: {
        colIdx,
        rowIdx: parseInt(rowIdx, 10),
      }
    })
  }

  handleDel(e) {
    const rowIdx = e.target.dataset.rowidx;
    let data = this.state.data.slice();
    data.splice(rowIdx, 1);

    this.setState({
      data,
    })
  }

  handleSave(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      const val = e.target.value;
      const data = this.state.data.slice();
      const key = this.state.columns[this.state.edit.colIdx].field;
      data[this.state.edit.rowIdx][key] = val;

      this.setState({
        data,
        edit: {
          colIdx: null,
          rowIdx: null,
        }
      })
    }
  }

  handleSearch(e) {
    const val = e.target.value;
    let data = this.props.data.slice();
    let d = data;
    if (val.trim().length) {
      d = data.map(obj => {
        return Object.values(obj).some(v => {
          return v && v.toString().includes(val)
        }) ? obj : null
      }).filter(Boolean)
    }

    this.setState({
      data: d,
    })
  }
}

Table.propType = {
  columns: PropTypes.array,
  data: PropTypes.array,
}