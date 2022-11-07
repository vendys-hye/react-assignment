import React, { Component } from "react";

class TestClassComp extends Component {
  constructor(props){
    super(props)
    this.state = {
      test: '여기는',
      number: 223,
    }
  }

  handleSetState = () => {
    this.setState({
      test: '바꾸다'
    });
  }

  render() {
    const { test } = this.state;

    return (
      <React.Fragment>
        <button onClick={this.handleSetState}>바꾸자</button>
        <div>{test}</div>
      </React.Fragment>
    )
  }
}

export default TestClassComp;