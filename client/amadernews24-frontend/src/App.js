import React, { Component} from 'react'
import './App.css';
import { Switch, Route } from "react-router-dom";

// All component
import Sidebar from './component/common/Sidebar';
import Category from './component/pages/Category'

export default class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Sidebar />
        <Switch>
          <Route exact path="/category" component={Category} />
        </Switch>
      </React.Fragment>
    )
  }
}
