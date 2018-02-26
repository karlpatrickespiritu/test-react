import React, { Component } from "react";
import Ticket from "./Ticket";
import TicketForm from "./components/tickets/ticket/form"
import {connect} from 'react-redux';

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
    const { dispatch } = this.props
  }

  render() {
    const { tickets, ticketsIsRequesting } = this.props
    console.log({ tickets, ticketsIsRequesting })
    return (
      <div>
        <TicketForm onSubmit={(e) => {
          e.preventDefault()
          console.log('ha')
        }}/>
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
  ticketsIsRequesting: state.tickets.isRequesting,
  tickets: state.tickets.data
})

export default connect(mapStateToProps)(App)
