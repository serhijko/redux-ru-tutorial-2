import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './components.css'

export default class User extends Component {

  render() {
    const { name } = this.props
    let template

    if (name) {
      template = <p>Привет, {name}!</p>
    } else {
      template = <button className="btn" onClick={this.props.handleLogin}>Войти</button>
    }

    return <div className="ib user">
      {template}
    </div>
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired
}
