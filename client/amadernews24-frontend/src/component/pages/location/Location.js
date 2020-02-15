import React, {Component} from 'react'
import Footer from '../../common/Footer'
import AddLocation from './modal/AddLocation'
import Sidebar from '../../common/Sidebar'

class Location extends Component {
    render(){
        return(
            <>
                <Sidebar />
                <div className="content-wrapper">
                    {/* Page title start */}
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0 text-dark">Location</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                                        <li className="breadcrumb-item active">Location</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* Page title end */}

                    {/* Main-content start */}
                    <section className="content">
                        <div className="container-fluid"> 
                            <div className="row">
                
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header text-right">
                                        <h3 className="card-title">List of locations</h3>
                                        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#open-modal"><i className="fas fa-plus"></i> New</button>
                                    </div>
                                    <AddLocation/>
                                    <div className="card-body">
                                    <table className="table table-bordered table-hover">
                                        <thead>
                                        <tr>
                                        <th>Location Name</th>
                                        <th>Parent</th>
                                        <th>Type</th>
                                        <th>Created Date</th>
                                        <th>Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                        <td>Bangladesh and National</td>
                                        <td>Internet
                                            Explorer 4.0
                                        </td>
                                        <td>Deactive</td>
                                        <td>02-FEB-2020, 12:00PM</td>
                                        <td>
                                            <button title="You may update the location from here" type="button" className="btn btn-info btn-flat btn-sm mr-2"><i className="fas fa-edit"></i></button>
                                            <button title="You may delete/remove the location from here" type="button" className="btn btn-danger btn-sm btn-flat"><i className="fas fa-trash"></i></button>
                                        </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                            </div>
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

export default Location
