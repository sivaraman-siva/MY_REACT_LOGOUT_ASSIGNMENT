import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as usersActions from "./actions";

class App extends Component {
  Increment() {
    this.props.actions.increment(this.props.increment + 10);
  }
  Decrement() {
    this.props.actions.Decrement(this.props.increment - 5);
  }
  logout() {
    this.props.actions.UserLogout(this.props.usersList);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <p><button onClick={() => {
          this.Increment()
        }
        }>INC</button><label>{this.props.increment}</label><button onClick={() => {
          this.Decrement()
        }
        }>DEC</button></p> */}

        <p><button onClick={() => {
          this.logout()
        }
        }>Logout</button></p>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
      usersList : state.userList
    };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(usersActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
