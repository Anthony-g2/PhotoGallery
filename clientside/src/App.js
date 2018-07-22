import React, { Component } from 'react';
import PhotosContainer from './components/PhotosContainer'

import './styles/App.css'
import './styles/photos.css'
import './styles/form.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1> Photos </h1>
        </div>
        <PhotosContainer />
      </div>
    );
  }
}

export default App;
