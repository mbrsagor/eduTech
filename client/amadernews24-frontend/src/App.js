import React, { Component} from 'react'
import './App.css';
import { Switch, Route } from "react-router-dom";

// All component
import Sidebar from './component/common/Sidebar';
import Category from './component/pages/category/Category'
import Tag from './component/pages/tag/Tag'
import Article from './component/pages/Article'
import Location from './component/pages/location/Location'
import Dashboard from './component/dashboard/Dashboard'

export default class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/tag" component={Tag} />
          <Route exact path="/location" component={Location} />
          <Route exact path="/article" component={Article} />
        </Switch>
      </React.Fragment>
    )
  }
}
