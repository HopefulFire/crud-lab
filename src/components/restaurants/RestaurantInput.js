import React, { Component } from 'react'
import { connect } from "react-redux"

class RestaurantInput extends Component {

  state = {
    text: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()

  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.text}
            name="text"
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRestaurant: (text) => dispatch({
      type: "ADD_RESTAURANT",
      payload: text
    })
  }
}

export default connect(null, mapDispatchToProps)(RestaurantInput)
