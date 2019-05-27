
//Redux allows you to centralise all your data into a single js object
//which can be acceses from anywhere in the app. This is called the 'store'

//The 'Reducer' is a function, which takes in data as a 'dispatch'
//and does something to it based on the 'action' which is passed with it.

import React, { Component } from 'react';
import logo from './friedhead.svg';
import './App.css';

//connects the config @ page end with the reducer & store
import { connect } from 'react-redux';

class App extends Component {
  //state is no longer managed here!

render() { 
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>30 days of React</h1>
          <h2>Day Twenty Four / Redux ATM Machine</h2>
          </header>
     
      <div className="wrapper">    
        <h1>Balance: {this.props.balance}</h1>
        <p>Withdraw Funds</p>
        
        <button className="mainbtn" onClick={this.props.withdraw50}>$50</button>
        <button className="mainbtn" onClick={this.props.withdraw100}>$100</button>
      </div>
      </div>
    );
  }
}

//We 'subscribe' to the global redux state so we can use it within the app.
//See 'Balance' in HTML above. its accessing the mapped state as a prop.
//Remember, we are no longer using local state.
const mapStateToProps = state => {
  return { 
    balance: state.balance 
  }
}

//Here we turn our various functions into usable props 
//They are now accessed using this.props.function, as opposed to this.function
const mapDispatchToProps = dispatch => {
  return {
    withdraw50: () => dispatch({type:'withdraw50'}),
    withdraw100: () => dispatch({type:'withdraw100'})
  }
}

//We export our onClick functions and props for use 
//they get sent? to the reducer?
export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);

