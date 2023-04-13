import React, { Component } from "react";

class Loader extends Component {
    render() {
        return (
          <div className="loader">
            <div className="lds-dual-ring"></div>
          </div>
      );
    }
  }
  
export default Loader;