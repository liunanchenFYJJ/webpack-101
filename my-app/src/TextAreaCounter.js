import { Component } from "react";
import PropTypes from 'prop-types';
import Counter from "./Counter";

export default class TextAreaCounter extends Component {

  static propTypes = {
    defaultVal: PropTypes.string,
  };

  static defaultProps = {
    text: ''
  }

  state = {
    text: this.props.defaultVal,
  }

  componentDidMount() {
    console.log('did mount');
  }

  componentDidUpdate() {
    console.log('did update');
  }

  componentWillUnmount() {
    console.log('will unmount');
  }

  // 性能提升场景 其实不建议使用，考虑使用pureComponent，其实也不建议使用，推荐使用函数式组件
  // shouldComponentUpdate() {
  //   console.log('should update');
  // }

  render() {
    return (
      <>
        <textarea defaultValue={this.state.text} onInput={ (e) => this.handleInput(e) }></textarea>
        <Counter count={ this.state.text.length }></Counter>
      </>
    )
  }

  handleInput(e) {
    const val = e.target.value;
    this.setState({
      text: val,
    })
  }
}