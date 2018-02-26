import React, {Component} from 'react'
import PropTypes from 'prop-types';
import hash from "../../../../services/utils/hash";
import {STATUS_CLOSE, STATUS_DONE, STATUS_IN_PROGRESS} from "../../../../services/actions/tickets";

class TicketUpdateForm extends Component {
  state = {
    id: null,
    title: null,
    status: null
  }

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    ticket: PropTypes.object.isRequired
  }

  static defaultPropTypes = {
  }

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { ticket } = this.props
    this.setState({
      id: ticket.id,
      title: ticket.title,
      status: ticket.status
    })
  }

  onChangeStatus(e) {
    this.setState({
      status: e.target.value
    })
  }

  render() {
    const { onSubmit } = this.props
    const { id, title, status } = this.state
    return (
      <form
        className="form-group"
        onSubmit={(e) => onSubmit(e)}>
        <input type="hidden" value={id}/>
        <div>
          <label>Description</label>
          <input name="desc" value={title} onChange={(e) => this.setState({ title: e.target.value })}/>
        </div>
        <div>
          <select class="form-control" value={status} onChange={(e) => this.setState({ status: e.target.value})}>
            <option></option>
            <option value={STATUS_IN_PROGRESS}>IN PROGRESS</option>
            <option value={STATUS_DONE}>DONE</option>
            <option value={STATUS_CLOSE}>CLOSE</option>
          </select>
        </div>
        <button type="submit">Update</button>
      </form>
    )
  }
}

export default TicketUpdateForm