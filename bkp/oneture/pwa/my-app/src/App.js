import React, { Component } from 'react';

import './Register/Register';
import Register from './Register/Register';

class App extends Component {

state = {
  person:[
    {name:'max', age:'23'},
    {name:'mx1', age:'29'},
    {name:'mm', age:'20'}
  ]
}
  render() {
    return (
      <div className="App">
        
       <p className="App-intro">
         HI I wanna do something  
        </p>
         {/*   <Register name="shivi"></Register>
           <Register name="shivi">sdfghjkl</Register>
           <Register name="shivi" age="9090"></Register> */}
           <Register name={this.state.person[0].name} age={this.state.person[0].age}></Register>
           <Register name={this.state.person[1].name} age={this.state.person[1].age}></Register>
           <Register name={this.state.person[2].name} age={this.state.person[2].age}></Register>
      </div>
    );
   // return React.createElement('div',{className:'app'},'hi', React.createElement('h1', null,'hello I\'m'));
  }
}

export default App;
