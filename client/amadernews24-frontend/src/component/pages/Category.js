import React, {Component} from 'react'
import Footer from '../common/Footer'

class Category extends Component {
    render(){
        return(
            <>
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
                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#open-modal"><i className="fas fa-plus"></i> New</button>
                                    </div>
                                    <div className="card-body">
                                    <table className="table table-bordered table-hover">
                                        <thead>
                                        <tr>
                                        <th>Category Name</th>
                                        <th>Parent</th>
                                        <th>Order</th>
                                        <th>Active</th>
                                        <th>Slide</th>
                                        <th>Created</th>
                                        <th>Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                        <td>Bangladesh and National</td>
                                        <td>Internet
                                            Explorer 4.0
                                        </td>
                                        <td>Win 95+</td>
                                        <td>YES</td>
                                        <td>YES</td>
                                        <td>02-FEB-2020</td>
                                        <td>
                                            <button title="You may update the category from here" type="button" className="btn btn-info btn-flat mr-2"><i className="fas fa-edit"></i></button>
                                            <button title="You may delete/remove the category from here" type="button" className="btn btn-danger btn-flat"><i className="fas fa-trash"></i></button>
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


                <div className="modal fade" id="open-modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Category create or update</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                
                            <form name="form">
                                <div className="card-body">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="category" placeholder="Enter category name"/>
                                    </div>
                                    <div class="form-group">
                                        <select class="form-control select2">
                                            <option selected="selected">Select Parent</option>
                                            <option>Alaska</option>
                                            <option>California</option>
                                            <option>Delaware</option>
                                            <option>Tennessee</option>
                                            <option>Texas</option>
                                            <option>Washington</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="number" className="form-control" id="order" placeholder="Enter order no"/>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-switch custom-switch-off-danger custom-switch-on-success">
                                            <input type="checkbox" className="custom-control-input" id="showPost"/>
                                            <label className="custom-control-label" for="showPost">Show as post </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-switch custom-switch-off-danger custom-switch-on-success">
                                            <input type="checkbox" className="custom-control-input" id="active"/>
                                            <label className="custom-control-label" for="active">Active Category</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        
                            </div>
                            <div className="modal-footer text-right">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-success">Save</button>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
export default Category
