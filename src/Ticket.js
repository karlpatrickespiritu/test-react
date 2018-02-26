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
    onClickDone: PropTypes.func,
    onClickNotFix: PropTypes.func,
    onClickClose: PropTypes.func,
  }

  static defaultProps = {
    onClickDone: () => {},
    onClickNotFix: () => {},
    onClickClose: () => {},
  }

  render() {
    const { ticket } = this.props;

    return (
      <div style={styles.ticket} >
        {/* Ticket description */}
        <h4>{ticket.title}</h4>
        <div>{ticket.desc}</div>
        {/* Ticket actions [Done/Not Fix/Close]. Modify to display them properly */}
        <div>
          <button>Done</button>
          <button>Not Fix</button>
          <button>Close</button>
        </div>
      </div>
    );
  }
}

export default Ticket;
