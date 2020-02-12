import React, { Component} from 'react'
import './App.css';
import { Switch, Route } from "react-router-dom";

// All component
import Header from './component/common/Header';
import Sidebar from './component/common/Sidebar';

export default class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Sidebar />
        <Switch>
        {/* <Route exact path="/" component={Header} /> */}
        </Switch>
      </React.Fragment>
    )
  }
}
