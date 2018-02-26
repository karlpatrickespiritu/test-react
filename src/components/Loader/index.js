import React, {Component} from 'react'
import PropTypes from 'prop-types';

class Loader extends Component {
  static propTypes = {
    isLoading: PropTypes.bool
  }

  static defaultProps = {
    isLoading: false
  }

  render() {
    const { isLoading } = this.props
    return isLoading
      ? <p>Loading..</p>
      : null
  }
}

export default Loader