import React, { Component } from "react";
import "../../styles/cards.css";
import Fade from "react-reveal/Fade";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const cards = [
  {
    name: "Dark Dalena",
    author: "Dalena",
    description: "1",
    image:
      "https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Dank Dan",
    author: "Dan",
    description:
      "Can you image, a world in which both dank memes and boba exist as one? Well wait no longer! Dank Dan is exactly what you are looking for! Ingredients derived from the deepest depths of the dark side of Youtube - this drink is only recommended for the best of the best memers!",
    image:
      "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Joppin' JPs",
    author: "JP",
    description: "3",
    image:
      "https://images.pexels.com/photos/605408/pexels-photo-605408.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Laughing Lambo",
    author: "Lambo",
    description: "4",
    image:
      "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Mischievous Melissa",
    author: "Melissa",
    description: "5",
    image:
      "https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Nuclear Nat",
    author: "Natalie",
    description: "6",
    image:
      "https://images.pexels.com/photos/1304473/pexels-photo-1304473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Sassy Sarah",
    author: "Sarah",
    description: "7",
    image:
      "https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Yawning Yutpa",
    author: "Yutpa",
    description: "8",
    image:
      "https://images.pexels.com/photos/715995/pexels-photo-715995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Zealous Zandra",
    author: "Zandra",
    description: "9",
    image:
      "https://images.pexels.com/photos/265704/pexels-photo-265704.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }
];

class CardModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.selectedCard.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>A note from {this.props.selectedCard.author}</h5>
          <p>{this.props.selectedCard.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      selectedCardIndex: 0
    };
  }

  render() {
    return (
      <div>
        <h1 className="about-title">Our Drinks</h1>
        <div className="cards-background">
          {cards.map((card, index) => (
            <Fade Big>
              <div
                style={{ backgroundImage: `url(${card.image})` }}
                className="individual-card"
                onClick={() =>
                  this.setState({ modalShow: true, selectedCardIndex: index })
                }
              />
            </Fade>
          ))}
        </div>
        <CardModal
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
          selectedCard={cards[this.state.selectedCardIndex]}
        />
      </div>
    );
  }
}

export default Cards;
