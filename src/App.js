import React, { Component } from "react";
import Ticket from "./Ticket";
import TicketForm from "./components/tickets/ticket/form"
import Loader from "./components/Loader"
import {connect} from 'react-redux';
import {addTicket, addTicketTitleChange} from "./services/actions/tickets";

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
    this.props.dispatch(addTicket())
  }

  onTitleKeyChange = (e) => {
    this.props.dispatch(addTicketTitleChange(e.target.value))
  }

  render() {
    const { tickets, isRequesting, ticketAddData } = this.props
    // console.log({ tickets, isRequesting, ticketAddData })
    return (
      <div>
        <TicketForm
          onSubmit={this.onSubmit}
          onTitleKeyChange={this.onTitleKeyChange}
          ticketAddData={ticketAddData}
        />
        <Loader isLoading={isRequesting}/>
        <br />
        <div style={styles.container}>
          <div style={styles.box}>
            <label style={styles.box.label}>IN-PROGRESS</label>
            {tickets.map((ticket) => {
              return <Ticket key={ticket.id} ticket={ticket}/>
            })}
          </div>
          <div style={styles.box}>
            <label style={styles.box.label}>DONE</label>
            {/** show Done tickets below */}
          </div>
          <div style={styles.box}>
            <label style={styles.box.label}>CLOSE</label>
            {/** show Close tickets below */}
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
