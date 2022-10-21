import React, { Component } from 'react'


export class SearchBar extends Component {

    state = {
        name: '',
    }

onHandleChange = (e) => {
this.setState({[e.target.name]: e.target.value})
}

handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({ name: '' });
  };

  render() {
    return (
      <div>
        <header class="searchbar">
  <form onSubmit={this.handleSubmit} class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      onChange={this.onHandleChange}
      name = "name"
      value = {this.state.name}
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
      </div>
    )
  }
}
