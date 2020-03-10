import React, { Component } from 'react'
import AddLocation from './modal/AddLocation'
import Footer from '../../component/common/Footer'
import Sidebar from '../../component/common/Sidebar'
import { fetchLocation } from '../../store/actions/LocationAction'
import * as moment from 'moment'
import { connect } from 'react-redux'

class Location extends Component {

    componentDidMount() {
        this.props.fetchLocation()
    }

    render() {
        let { locations } = this.props
        console.log(locations.results)
        return (
            <div>
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
                                        <AddLocation />
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
                                                    {
                                                        locations.results && locations.results.map((location, index) => {
                                                            return (
                                                                <tr key={index}>
                                                                    <td>{location.name}</td>
                                                                    <td>{location.parent}</td>
                                                                    <td>{location.type}</td>
                                                                    <td>{moment(location.created_at).format('DD/MM/YYYY h:mm a')}</td>
                                                                    <td>
                                                                        <button title="You may update the location from here" type="button" className="btn btn-info btn-flat btn-sm mr-2"><i className="fas fa-edit"></i></button>
                                                                        <button title="You may delete/remove the location from here" type="button" className="btn btn-danger btn-sm btn-flat"><i className="fas fa-trash"></i></button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
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
            </div>
        )
    }
}

const mapStateToProps = state => ({
    locations: state.locations
})

export default connect(mapStateToProps, { fetchLocation })(Location)
