import Child1 from "./child1";
import Child2 from "./child2";
import React from "react";

class Parent extends React.Component {
  state = { data: "Hello World", message: "Initial Data" };

  callbackfromchild1 = childData => {
    this.setState({ message: childData });
  };

  render() {
    return (
      <div>
        <Child1 parentcallbackChild={this.callbackfromchild1} />
        <Child2 dataFromParent={this.state.data} />

        <p>Data from the Child1:(child to Parent):{this.state.message}</p>
      </div>
    );
  }
}
export default Parent;
