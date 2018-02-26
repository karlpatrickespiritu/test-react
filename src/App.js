import React, { Component } from "react";
import Ticket from "./components/Tickets/Ticket";
import TicketForm from "./components/Tickets/Ticket/Form"
import Loader from "./components/Loader"
import {connect} from 'react-redux';
import {
  addTicket, addTicketTitleChange, STATUS_CLOSE, STATUS_DONE,
  STATUS_IN_PROGRESS, ticketChangeStatus
} from "./services/actions/tickets";

const styles = {
  container: {
    display: "flex"
  },
  box: {
    flex: "0 1 33%",
    textAlign: "center",
    borderRight: "1px solid #ccc",
    label: {
      fontWeight: 600
    }
  }
};

class App extends Component {
  static propTypes = {
  }

  static defaultProps = {
  }

  constructor(props) {
    super(props)
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { dispatch, ticketAddData } = this.props
    if (ticketAddData.title && ticketAddData.title !== '') {
      dispatch(addTicket())
    }
  }

  onTitleKeyChange = (e) => {
    this.props.dispatch(addTicketTitleChange(e.target.value))
  }

  changeStatus = (ticket, status) => {
    this.props.dispatch(ticketChangeStatus(ticket.id, status))
  }

  render() {
    const { tickets, isRequesting, ticketAddData } = this.props
    const inProgress = (ticket) => ticket.status === STATUS_IN_PROGRESS
    const done = (ticket) => ticket.status === STATUS_DONE
    const closed = (ticket) => ticket.status === STATUS_CLOSE
    const ticketComponent = (ticket) => (
      <Ticket
        onDone={(ticket) => this.changeStatus(ticket, STATUS_DONE)}
        onNotFix={(ticket) => this.changeStatus(ticket, STATUS_IN_PROGRESS)}
        onClose={(ticket) => this.changeStatus(ticket, STATUS_CLOSE)}
        key={ticket.id}
        ticket={ticket}/>
    )
    const inProgressTickets = tickets.filter(inProgress).map(ticketComponent)
    const doneTickets = tickets.filter(done).map(ticketComponent)
    const closedTickets = tickets.filter(closed).map(ticketComponent)

    return (
      <div>
        <TicketForm
          onSubmit={this.onSubmit}
          onTitleKeyChange={this.onTitleKeyChange}
          ticketAddData={ticketAddData}
          isRequesting={isRequesting}
        />
        {/*<Loader isLoading={isRequesting}/>*/}
        <br />
        <div style={styles.container}>
          <div style={styles.box}>
            <label style={styles.box.label}>IN-PROGRESS</label>
            {inProgressTickets}
          </div>
          <div style={styles.box}>
            <label style={styles.box.label}>DONE</label>
            {doneTickets}
          </div>
          <div style={styles.box}>
            <label style={styles.box.label}>CLOSE</label>
            {closedTickets}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isRequesting: state.tickets.isRequesting,
  tickets: state.tickets.data,
  ticketAddData: state.tickets.ticketAddData,
})

export default connect(mapStateToProps)(App)
