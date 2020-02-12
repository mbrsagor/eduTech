import React, { Component } from 'react';

export default class Footer extends Component {
    render(){
        return(
            <footer className="main-footer">
                <strong>Copyright &copy; 2020 <a href="/">Amader news 24 hours</a>.</strong> All rights reserved.
                <div className="float-right d-none d-sm-inline-block">
                    <b>Online</b> news potal
                </div>
            </footer>
        )
    }
}