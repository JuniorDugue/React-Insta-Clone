import React, {Component} from 'react';

import SearchBar from "./components/SearchBar/SearchBar"
import PostContainer from "./components/PostContainer/PostContainer"
import CommentSection from "./components/CommentSection/CommentSection"

import dummyData from "./dummy-data"

import './App.scss';

class App extends Component {
  constructor(){
    super();
    this.state = {
      post: dummyData
    }
  }
    render(){
    return (
      <div className="App">
      <SearchBar/>
      <PostContainer/>
      <CommentSection/>
      </div>
    );
  }
}

export default App;
