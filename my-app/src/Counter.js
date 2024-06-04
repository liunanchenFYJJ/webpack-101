import { Component } from "react";

export default class Counter extends Component {

  componentDidMount() {
    console.log('sub did mount');
  }

  componentDidUpdate() {
    console.log('sub did update');
  }

  componentWillUnmount() {
    console.log('sub will unmount');
  }

  render() {
    return (
      <h3>sub comp :{ this.props.count }</h3>
    )
  }
}