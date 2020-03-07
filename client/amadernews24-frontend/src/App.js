import React, { Component} from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

// All component
import Category from '../src/pages/category/Category'
import Tag from '../src/pages/tag/Tag'
import Article from '../src/pages/article/Article'
import Location from '../src/pages/location/Location'
import Dashboard from './dashboard/Dashboard'
import Login from '../src/pages/auth/Login'
import Registeration from '../src/pages/auth/Registeration'
import ForgotPassword from '../src/pages/auth/ForgotPassword'

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
