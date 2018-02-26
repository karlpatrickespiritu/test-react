import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import './style.css'

class TicketForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onTitleKeyChange: PropTypes.func.isRequired,
    ticketAddData: PropTypes.object.isRequired,
    isRequesting: PropTypes.bool,
  }

  static defaultPropTypes = {
    isRequesting: false,
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { onSubmit, onTitleKeyChange, ticketAddData, isRequesting } = this.props
    return (
      <form
        name="search"
        className="form-group"
        onSubmit={(e) => onSubmit(e)}>
        <input
          onChange={onTitleKeyChange}
          value={ticketAddData.title}
          type="text"
          style={{ borderRadius: "3px" }}
        />
        <button type="submit" style={{ cursor: "pointer" }}>
          {!isRequesting ? "ADD": "Adding..."}
        </button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  search: state.search
})

export default connect(mapStateToProps)(TicketForm)