import React, { Component } from 'react'
import TotalCount from './TotalCount'
import Calendar from './Calendar'
import Chat from './Chat'
import Visitors from './Visitors'


export default class Dashboard extends Component {
    render(){
        return(
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
        )
    }
}
