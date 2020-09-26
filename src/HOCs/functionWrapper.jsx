import React from "react";
import Header from "../components/Header";

const wrapper = (Component) => {
  return (props) => {
    return (
      <div>
        <Header />
        <Component {...props} />
        <footer>this is a footer</footer>
      </div>
    );
  };
};

export default wrapper;
