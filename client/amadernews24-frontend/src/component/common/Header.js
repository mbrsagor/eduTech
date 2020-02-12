import React, { Component } from 'react'
import Messages from '../alart/Messages'
import Notifications from '../alart/Notifications'

export default class Header extends Component{
    
    render(){
        return(
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars"></i></a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <Messages/>
                    </li>
                    <li className="nav-item dropdown">
                        <Notifications />
                    </li>
                </ul>
            </nav>
        )
    }
}
