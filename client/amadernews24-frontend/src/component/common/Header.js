import React, { Component } from 'react'
import Messages from '../alart/Messages'
import Notifications from '../alart/Notifications'
import HeaderUser from '../alart/HeaderUser' 

export default class Header extends Component{
    
    render(){
        return(
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" data-widget="pushmenu" href="#0"><i className="fas fa-bars"></i></a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <Messages/>
                    </li>
                    <li className="nav-item dropdown">
                        <Notifications />
                    </li>
                    <li className="nav-item dropdown user-menu">
                        <HeaderUser />
                    </li>
                </ul>
            </nav>
        )
    }
}
