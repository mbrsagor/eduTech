import React, { Component } from 'react'
import AddCategory from './modal/AddCategory'
import Footer from '../../component/common/Footer'
import Sidebar from '../../component/common/Sidebar'
import { connect } from 'react-redux'
import { categoryFetchAction } from '../../store/actions/CategoryAction'
import * as moment from 'moment'

class Category extends Component {

    componentDidMount() {
        this.props.categoryFetchAction()
    }

    render() {
        let { categorys } = this.props
        console.log(categorys.results)
        return (
            <div>
                <Sidebar />
                <div className="content-wrapper">
                    {/* Page title start */}
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0 text-dark">Category</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                                        <li className="breadcrumb-item active">Category</li>
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
                                            <h3 className="card-title">List of category and sub-category</h3>
                                            <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#open-modal"><i className="fas fa-plus"></i> New</button>
                                        </div>
                                        <AddCategory />
                                        <div className="card-body">
                                            <table className="table table-bordered table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Category Name</th>
                                                        <th>Parent</th>
                                                        <th>Order</th>
                                                        <th>Active</th>
                                                        <th>Slide</th>
                                                        <th>Created Date</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {categorys.results && categorys.results.map((category, index) => {
                                                        return (
                                                            <tr>
                                                                <td>{category.name}</td>
                                                                <td>{category.parent}</td>
                                                                <td>{category.order}</td>
                                                                <td>{category.is_active && category.is_active ? 'Activated': 'De-Activated'}</td>
                                                                <td>{category.show_as_category && category.show_as_category ? 'Yes': 'No'}</td>
                                                                <td>{moment(category.created_at).format('DD/MM/YYYY h:mm a')}</td>
                                                                <td>
                                                                    <button title="You may update the category from here" type="button" className="btn btn-info btn-flat btn-sm mr-2"><i className="fas fa-edit"></i></button>
                                                                    <button title="You may delete/remove the category from here" type="button" className="btn btn-danger btn-sm btn-flat"><i className="fas fa-trash"></i></button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })}
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
    categorys: state.categorys
})

export default connect(mapStateToProps, { categoryFetchAction })(Category)
