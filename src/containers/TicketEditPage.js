import React, { Component } from "react";
import {connect} from 'react-redux';
import TicketUpdateForm from "../components/Tickets/Ticket/UpdateForm/index";

class TicketEditPage extends Component {
  static propTypes = {
  }

  static defaultProps = {
  }

  constructor(props) {
    super(props)

  }

  getTicketByRoute() {
    const { match, tickets } = this.props
    const ticketId = match.params.id
    return tickets.find((ticket) => tickets.id === ticketId)
  }

  render() {
    const ticket = this.getTicketByRoute()
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <TicketUpdateForm onSubmit={() => {}} ticket={ticket}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isRequesting: state.tickets.isRequesting,
  tickets: state.tickets.data
})

export default connect(mapStateToProps)(TicketEditPage)
