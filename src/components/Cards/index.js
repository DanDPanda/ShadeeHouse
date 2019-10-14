import React, { Component } from "react";
import "../../styles/cards.css";
import Fade from "react-reveal/Fade";
import { cards } from "../../helpers/card-info";
import CardModal from "../CardModal";

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
        <Fade Big>
          <p className="card-title"> Our Drinks</p>
        </Fade>
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
