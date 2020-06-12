import React from "react";

class Child2 extends React.Component {
  render() {
    return <div>The data from parent is:{this.props.dataFromParent}</div>;
  }
}

export default Child2;
