import React, { Component } from "react";
import "../../styles/about.css";
import ImageGallery from "react-image-gallery";
import Fade from "react-reveal/Fade";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/"
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/"
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/"
  }
];

class About extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Fade Big>
          <h1 className="about-title">About Us</h1>
        </Fade>
        <Fade Big>
          <p className="about-body">
            Welcome to the Shadee House website, I hate writing descriptions so
            let's just pretend like this is something useful and that we are a
            really wholesome group so be sure to come by and buy some coffee
            otherwise curse to you because we only make the best! Hope to see
            you soon!
          </p>
        </Fade>
        <Fade Big>
          <ImageGallery
            items={images}
            showThumbnails={false}
            showNav={false}
            showFullscreenButton={false}
            showPlayButton={false}
            autoPlay={true}
            slideInterval={6000}
          />
        </Fade>
      </div>
    );
  }
}

export default About;
