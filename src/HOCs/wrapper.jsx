import React, { Component } from "react";
import Header from "../components/Header";

class Wrapper extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <footer>this is a footer</footer>
      </div>
    );
  }
}

export default Wrapper;
