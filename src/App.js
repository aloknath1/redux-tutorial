import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUser } from './actions/user-actions';

class App extends Component {
  constructor(props){
    super(props);

    //this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(user){
    this.props.onUpdateUser(user);
  }

  render() {   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <div onClick={this.onUpdateUser.bind(this)}>Update</div>
        {this.props.user}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {  
  return {
      products: state.products,
      user: state.user,
      userPlusProp: `${state.user} ${props.aRandomProps}`
  }
 
};

const mapActionsToProps = (dispatch, props) => {
  //console.log(props);
  return bindActionCreators({
      onUpdateUser : updateUser
  }, dispatch);
  
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps ) => {
  console.log(propsFromState, propsFromDispatch, ownProps );
  return {};
};

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(App);
