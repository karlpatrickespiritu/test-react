import React, { Component } from "react";
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import TicketUpdateForm from "../components/Tickets/Ticket/UpdateForm/index";
import {updateTicket} from "../services/actions/tickets";

class TicketEditPage extends Component {
  static propTypes = {
  }

  static defaultProps = {
  }

  constructor(props) {
    super(props)

  }

  getTicketByRoute() {
    const {match, tickets} = this.props
    const ticketId = match.params.ticket
    const ticket = tickets.find((ticket) => ticket.id === ticketId)
    return ticket ? ticket : false
  }

  onSubmit = (values) => {
    const { dispatch } = this.props
    dispatch(updateTicket(values))
    this.props.history.push('/')
  }

  render() {
    const { dispatch } = this.props
    const ticket = this.getTicketByRoute()
    return ticket ?
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <TicketUpdateForm
              onSubmit={this.onSubmit}
              ticket={ticket}/>
          </div>
        </div>
      : <p>Ticket not found.. <Link to="/">Go back</Link>.</p>;
  }
}

const mapStateToProps = (state) => ({
  isRequesting: state.tickets.isRequesting,
  tickets: state.tickets.data
})

export default connect(mapStateToProps)(TicketEditPage)
