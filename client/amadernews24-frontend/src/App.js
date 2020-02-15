import React, { Component} from 'react'
import './App.css';
import { Switch, Route } from "react-router-dom";

// All component
import Category from './component/pages/category/Category'
import Tag from './component/pages/tag/Tag'
import Article from './component/pages/article/Article'
import Location from './component/pages/location/Location'
import Dashboard from './component/dashboard/Dashboard'
import Login from './component/pages/auth/Login'
import Registeration from './component/pages/auth/Registeration'
import ForgotPassword from './component/pages/auth/ForgotPassword'

export default class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/tag" component={Tag} />
          <Route exact path="/location" component={Location} />
          <Route exact path="/add-new-article" component={Article} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registration" component={Registeration} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </React.Fragment>
    )
  }
}
