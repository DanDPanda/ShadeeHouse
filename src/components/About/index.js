import React, { Component } from "react";
import "../../styles/about.css";
import earth from "../../images/Earth.png";

class About extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 className="about-title">About Us</h1>
        <p className="about-body">
          Welcome to the Shadee House website, I hate writing descriptions so
          let's just pretend like this is something useful and that we are a
          really wholesome group so be sure to come by and buy some coffee
          otherwise curse to you because we only make the best! Hope to see you
          soon!
        </p>
        <img className="about-photo" src={require("../../images/Earth.png")} />
      </div>
    );
  }
}

export default About;
