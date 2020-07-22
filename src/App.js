import React, { Component } from 'react';
import './App.css';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Name from "./components/Name";
import Message from "./components/Message";
import Addition from "./components/Addition";
import FunctionClick from "./components/FunctionClick";
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';
import UserList from './components/UserList';
import ListManupulation from './components/ListManupulation';
import NumberList from './ListComponent/NumberList';
class App extends Component{
  render() {
    const numbers= [1,2,3,4,5];
    return (
     
      <div className="App">
        {/* <UserList/> */}
        <NumberList numbers={numbers}/>
        {/* <ListManupulation numbers= {numbers} /> */}
        {/* <UserGreetings></UserGreetings> */}
      {/* <h1> Hello kunal </h1> */}
      {/* <Greet/>
      <Welcome/>
      <Hello/> */}
      {/* <Name name="Bruce" heroName="Batman">
        <p>Bruce is not afraid of Darkness, He can go along Gotham.</p>
      </Name>
      <Name name="Diana">
        <button>Action</button>
      </Name>
      <Welcome name="Mr Ratan" officeBoy="Moti lal"></Welcome>
      <Message></Message>
      <Addition/>
      <FunctionClick></FunctionClick>
      <ParentComponent></ParentComponent> */}
      </div>
    );
  }
}

export default App;