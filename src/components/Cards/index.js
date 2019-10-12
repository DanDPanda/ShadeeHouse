import React, { Component } from "react";
import "../../styles/cards.css";
import Fade from "react-reveal/Fade";

const cards = [
  {
    name: "Dalena",
    description: "1",
    image:
      "https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Dan",
    description: "2",
    image:
      "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "JP",
    description: "3",
    image:
      "https://images.pexels.com/photos/605408/pexels-photo-605408.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Lambo",
    description: "4",
    image:
      "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Melissa",
    description: "5",
    image:
      "https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Natalie",
    description: "6",
    image:
      "https://images.pexels.com/photos/1304473/pexels-photo-1304473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Sarah",
    description: "7",
    image:
      "https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Yutpa",
    description: "8",
    image:
      "https://images.pexels.com/photos/715995/pexels-photo-715995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Zandra",
    description: "9",
    image:
      "https://images.pexels.com/photos/265704/pexels-photo-265704.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }
];

//https://www.react-reveal.com/

class Cards extends Component {
  render() {
    return (
      <div>
        <h1 className="about-title">Our Drinks</h1>
        <div className="cards-background">
          {cards.map(card => (
            <Fade Big>
              <div
                style={{ backgroundImage: `url(${card.image})` }}
                className="individual-card"
              />
            </Fade>
          ))}
        </div>
      </div>
    );
  }
}

export default Cards;
