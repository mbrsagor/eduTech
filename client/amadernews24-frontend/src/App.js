import React, { Component} from 'react'
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/category" component={Category} />
          <Route path="/tag" component={Tag} />
          <Route path="/location" component={Location} />
          <Route path="/add-new-article" component={Article} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registeration} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </BrowserRouter>
    )
  }
}
