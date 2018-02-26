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
    e.preventDefault()
    const { dispatch, ticket } = this.props
    console.log('ha', ticket)
    // dispatch()
  }

  render() {
    const { ticket, onDone } = this.props;

    return (
      <div style={styles.ticket} >
        <h4>{ticket.title}</h4>
        <div>
          <button onClick={this.onClickDone}>Done</button>
          <button>Not Fix</button>
          <button>Close</button>
        </div>
      </div>
    );
  }
}

export default Ticket;
