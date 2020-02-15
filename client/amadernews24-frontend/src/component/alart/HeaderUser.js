import React, { Component } from 'react'


class HeaderUser extends Component {
    render(){
        return(
            <>
            <a href="#0" className="nav-link dropdown-toggle" data-toggle="dropdown">
            <img src="assets/dist/img/user2-160x160.jpg" className="user-image img-circle elevation-2" alt="User"/>
                        <span className="d-none d-md-inline">Sagor</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <li className="user-header bg-primary">
                    <img src="assets/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User"/>
                    <p>
                    Software Developer
                    <small>15 Feb 2020</small>
                    </p>
                </li>
                <li className="user-footer">
                    <a href="/" className="btn btn-default btn-flat">Profile</a>
                    <a href="/login" className="btn btn-default btn-flat float-right">Sign out</a>
                </li>
            </ul>
            </>
        )
    }
}
export default HeaderUser
