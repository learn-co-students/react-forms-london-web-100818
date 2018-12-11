import React, { Component } from 'react'

class ControlledInput extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(event.target.value)
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default ControlledInput
