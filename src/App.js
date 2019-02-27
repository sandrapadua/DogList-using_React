import React, { Component } from 'react';
import './App.css';
import DogListContainer from './Components/DogListContainer'
import DogBreedImagesContainer from './Components/DogBreedImagesContainer'
import DogBreedImages from './Components/DogBreedImages'
import {Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
       <main>
         <Route exact path ="/" component = {DogListContainer}  />    
         <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
 </main>
      </div>
    );
  }
}

export default App;
