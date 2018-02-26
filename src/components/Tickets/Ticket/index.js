import React, { Component } from "react";
import PropTypes from "prop-types";

const styles = {
  ticket: {
    border: "1px solid #ccc",
    borderRadius: "3px",
    minHeight: "7em",
    padding: "0.5em",
    margin: "0.5em",
    fontWeight: "normal",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }
};

class Ticket extends Component {
  static propTypes = {
    ticket: PropTypes.object,
    onDone: PropTypes.func,
    onNotFix: PropTypes.func,
    onClose: PropTypes.func,
  }

  static defaultProps = {
    onDone: () => {},
    onNotFix: () => {},
    onClose: () => {},
  }

  onClickDone = (e) => {
    const { ticket, onDone } = this.props
    onDone(ticket)
    e.preventDefault()
  }

  onClickNotFix = (e) => {
    const { ticket, onNotFix } = this.props
    onNotFix(ticket)
    e.preventDefault()
  }

  onClickClose = (e) => {
    const { ticket, onClose } = this.props
    onClose(ticket)
    e.preventDefault()
  }

  render() {
    const { ticket, onDone } = this.props;

    return (
      <div style={styles.ticket} >
        <h4>{ticket.title}</h4>
        <div>
          <button onClick={this.onClickDone}>Done</button>
          <button onClick={this.onClickNotFix}>Not Fix</button>
          <button onClick={this.onClickClose}>Close</button>
        </div>
      </div>
    );
  }
}

export default Ticket;
