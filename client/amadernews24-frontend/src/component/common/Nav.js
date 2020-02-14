import React, { Component } from 'react'

export default class Nav extends Component{
    
    render(){
        return(
            <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item">
                  <a href="/" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt"></i>
                    <p> Dashboard </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/page" className="nav-link">
                    <i className="nav-icon fas fa-edit"></i>
                    <p>Add New Article</p>
                  </a>
                </li>
                <li className="nav-item has-treeview">
                  <a href="#0" className="nav-link">
                    <i className="nav-icon fas fa-copy"></i>
                    <p> Article Settings
                      <i className="fas fa-angle-left right"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="/category" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Category</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Tags</p>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="/" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Location</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#0" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Add Menu</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-header">Other</li>
                <li className="nav-item has-treeview">
                  <a href="#0" className="nav-link">
                    <i className="nav-icon far fa-envelope"></i>
                    <p>
                      Mailbox
                      <i className="fas fa-angle-left right"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="#0" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Inbox</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#0" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Compose</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#0" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Read</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-treeview">
                  <a href="#0" className="nav-link">
                    <i className="nav-icon fas fa-book"></i>
                    <p>
                      Pages
                      <i className="fas fa-angle-left right"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="#0" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Invoice</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#0" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Profile</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-treeview">
                  <a href="#0" className="nav-link">
                    <i className="nav-icon far fa-user"></i>
                    <p>
                      Users
                      <i className="fas fa-angle-left right"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="#0" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Login</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#0" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Register</p>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
          </nav>
        )
    }
}
