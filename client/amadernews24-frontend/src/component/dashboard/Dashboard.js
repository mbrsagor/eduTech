import React, { Component } from 'react'
import TotalCount from './TotalCount'
import Calendar from './Calendar'
import Chat from './Chat'
import Visitors from './Visitors'
import Footer from '../common/Footer'

export default class Dashboard extends Component {
    render(){
        return(
            <>
                <div className="content-wrapper">
                    {/* Page title start */}
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
                     {/* Page title end */}

                    {/* Main-content start */}
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
                    {/* Main-content end */}
                </div>
                <Footer />
            </>
        )
    }
}
