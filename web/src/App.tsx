import React, { Component } from 'react';
import './assests/styles/global.css'
import './pages/Landing'
  import Routes from './pages/routes';

class App extends Component{
/*constructor(state){
  super(state);
  this.state = {}
}*/

  render(){
    return (
      <div >
        <Routes/>
      </div>
    );
  }
}

export default App;
