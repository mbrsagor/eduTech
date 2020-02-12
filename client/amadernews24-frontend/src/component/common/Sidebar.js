import React, { Component } from 'react';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import Dashboard from '../dashboard/Dashboard'


export default class Sidebar extends Component {
    render(){
        return(
            <div className="wrapper">
                <Header/>
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    <a href="index3.html" className="brand-link">
                    <img src="assets/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                        />
                    <span className="brand-text font-weight-light">Amader-News24</span>
                    </a>

                    <div className="sidebar">
                    
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                        <img src="assets/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"/>
                        </div>
                        <div className="info">
                        <a href="#" className="d-block">Mbr-Sagor</a>
                        </div>
                    </div>
                        <Nav/>
                    </div>
                </aside>
                <div className="content-wrapper">
                    <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0 text-dark">Dashboard</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ol>
                        </div>
                        </div>
                    </div>
                    </div>
                    <Dashboard/>
                </div>
            <Footer />
        </div>
        )
    }
}
