import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import './style.css'

class TicketForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { onSubmit } = this.props
    return (
      <form
        name="search"
        className="form-group"
        onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          style={{ borderRadius: "3px" }}
        />
        <button type="submit" style={{ cursor: "pointer" }}>
          ADD
        </button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  search: state.search
})

export default connect(mapStateToProps)(TicketForm)