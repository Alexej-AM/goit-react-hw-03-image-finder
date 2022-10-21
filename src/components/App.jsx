import React, { Component } from 'react';
import axios from 'axios';
import {SearchBar} from "components/SearchBar/SearchBar"

// axios.defaults.baseURL = "https://pixabay.com/api/?key=29365633-60606ea12614ba8c3cfb381aa";

// ?q=cat&page=1&key='29365633-60606ea12614ba8c3cfb381aa'&image_type=photo&orientation=horizontal&per_page=12
// const BASE_URL = 'https://pixabay.com/api/';
//   const PER_PAGES = 40;
//   const KEY = '29365633-60606ea12614ba8c3cfb381aa';

export class App extends Component {

  state = {
    name: '',
    page: 1,
    images: [],
    loading: false,
  }

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.name;
    const nextName = this.state.name;
    const { name, page } = this.state;
    
    if (prevProps.name !== this.props.name) {
      // console.log(prevProps.name)
      // console.log(this.props.name)
      // this.handleChangeState();
      
      
    }
    if (prevName !== nextName) {
      console.log('Prev', prevName)
      console.log('Next', nextName)
      this.fetchImages(name, page).then(response => {
        this.setState({ images: response, page: page + 1, loading: false });
      });
    }
  }

  fetchImages = async (name, page) => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${name}&page=${page}&key=29365633-60606ea12614ba8c3cfb381aa&image_type=photo&orientation=horizontal&per_page=12`
      );
      console.log(response.data.hits)
      return response.data.hits;
    } catch (error) {
      console.error(error);
    }
  }
  
  handleChangeState = ({ name }) => {
    this.setState({ name: name, page: 1, loading: true });
    
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleChangeState}/>
      </div>
    )
  }
}
