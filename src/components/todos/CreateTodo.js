import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: "ADD_TODO", payload: this.state })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="add todo"
          name="text"
          onChange={this.handleChange}
          value={this.state.text}
        />
        <input type="submit" />
      </form>
    )
  }
}

export default connect()(CreateTodo);
