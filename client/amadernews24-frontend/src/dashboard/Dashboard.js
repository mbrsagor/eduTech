import React, { Component } from 'react'
import Footer from '../component/common/Footer'
import Sidebar from '../component/common/Sidebar'
import Calendar from './Calendar'
import Chat from './Chat'
import TotalCount from './TotalCount'
import Visitors from './Visitors'

export default class Dashboard extends Component {

    // componentDidMount(){}
    
    render(){
        return(
            <div>  
                <Sidebar />
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
                     
                    <section className="content">
                        <div className="container-fluid">
                            <TotalCount/>
                            <div className="row">
                            <section className="col-lg-7 connectedSortable">
                                <Chat/>
                            </section>
                            <section className="col-lg-5 connectedSortable">
                                <Visitors/>
                                <Calendar/>
                            </section>
                            </div>
                        </div>
                    </section>
                    
                </div>
                <Footer />
            </div>
        )
    }
}
