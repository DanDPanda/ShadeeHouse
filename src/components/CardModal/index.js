import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { Component } from "react";

class CardModal extends Component {
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
        <div
          style={{ backgroundImage: `url(${this.props.selectedCard.image})` }}
          className="modal-image"
        />
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

export default CardModal;
