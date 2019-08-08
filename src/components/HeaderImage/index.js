import React, { Component } from "react";
import "../../styles/headerimage.css";
import { Parallax } from "react-parallax";

const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

class Header extends Component {
  render() {
    return (
      <>
        <h1>| | |</h1>
        <div className="bar">
          <Parallax
            bgImage={
              "https://cdn.vox-cdn.com/thumbor/djWq2urcpa7tudS9B-sibTK8Tl8=/0x0:2727x1928/1200x800/filters:focal(326x688:762x1124)/cdn.vox-cdn.com/uploads/chorus_image/image/58043481/TH_main_m_2__C_Fuji_Television_Network_Inc.East_Entertainment.1513718001.jpg"
            }
            strength={1000}
          >
            <div style={{ height: 500 }} />
          </Parallax>
        </div>
        <h1>| | |</h1>
        <Parallax bgImage={image1} strength={500}>
          <div style={{ height: 500 }}>
            <div style={insideStyles}>HTML inside the parallax</div>
          </div>
        </Parallax>
      </>
    );
  }
}

export default Header;
