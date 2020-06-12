import React from "react";

class Child1 extends React.Component {
  changedata = () => {
    this.props.parentcallbackChild("Hello from child1");
  };
  render() {
    return (
      <div>
        This is child1
        <button onClick={this.changedata}>Click here</button>
      </div>
    );
  }
}

export default Child1;
