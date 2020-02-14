import React, { Component } from 'react';
import Nav from './Nav';
import Header from './Header';

export default class Sidebar extends Component {
    render(){
        return(
            <div className="wrapper">
                <Header/>
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    <a href="/" className="brand-link">
                    <img src="assets/dist/img/AdminLTELogo.png" alt="Logo" className="brand-image img-circle elevation-3"
                        />
                    <span className="brand-text font-weight-light">Amader-News24</span>
                    </a>

                    <div className="sidebar">
                    
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                        <img src="assets/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User"/>
                        </div>
                        <div className="info">
                        <a href="#0" className="d-block">Mbr-Sagor</a>
                        </div>
                    </div>
                        <Nav/>
                    </div>
                </aside>
            </div>
        )
    }
}
