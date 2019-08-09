import React, { Component } from "react";
import "../../styles/header.css";
import { Parallax } from "react-parallax";

class Header extends Component {
  render() {
    return (
      <>
        <Parallax bgImage={require("../../images/Space.png")} strength={1500}>
          <div className="header-image">
            <div className="header-text">Shadee House</div>
          </div>
        </Parallax>
      </>
    );
  }
}

export default Header;
