import React, { Component } from 'react';
import './App.css';
//import Ping from './ping'
//import Prop_demo from './prop_demo'
//import C_demo from './conditional_demo'
import Calculator from './simpleCalci.js'
import D_prev from './displayPrevious'
class App extends Component {
  /*state={
    student:[
      {name:"abc",roll:1,class:5},
      {name:"bcd",roll:2,class:6},
      {name:"cde",roll:3,class:7},
      {name:"efg",roll:4,class:8}
    ]
  }*/

  state={
    prev_res:[
    ]
    
  }
  add_prev_res=(result)=>{
    
      result.id=Math.random();
      let gg=[...this.state.prev_res,result];
    this.setState({
      prev_res:gg
    });
    console.log(result) 
  }

  delete_history=(id)=>{
    console.log(id);
    const fil=this.state.prev_res.filter(obj=>{
      return obj.id !== id;
    })
    this.setState({
      prev_res:fil
    });
  }
  render() {
    return (
      <div className="App">
          <Calculator add_prev_res={this.add_prev_res}/><br/><br/>
          <h1>previous results</h1>
          <D_prev delete_history={this.delete_history} result={this.state.prev_res}/>
      </div>
    );
  }
}

export default App;
