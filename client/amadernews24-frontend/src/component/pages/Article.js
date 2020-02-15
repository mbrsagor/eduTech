import React, { Component } from 'react'
import Footer from '../common/Footer'

export default class Article extends Component {
    render(){
        return(
            <>
                <div className="content-wrapper">
                    {/* Page title start */}
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0 text-dark">Article</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                                        <li className="breadcrumb-item active">Article</li>
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
                                        <div className="card-header">
                                            <h3 className="card-title">Add new Article</h3>

                                            <div className="card-tools">
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                                                <i className="fas fa-minus"></i></button>
                                            <button type="button" className="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                                                <i className="fas fa-times"></i></button>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <form name="form">
                                                <div className="row">
                                                    <div className="col-8">
                                                        <div class="form-group">
                                                            <label for="title">Title</label>
                                                            <input type="text" class="form-control" id="title" placeholder="Enter post title"/>
                                                        </div>
                                                        <textarea className="textarea"></textarea>
                                                        <div class="form-group">
                                                            <input type="text" class="form-control" placeholder="Meta description"/>
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" class="form-control" placeholder="Meta keyword"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                    <div class="form-group">
                                                        <label for="status">Status</label>
                                                            <select class="form-control select2">
                                                                <option>Published</option>
                                                                <option>Drafted</option>
                                                                <option>Delaware</option>
                                                                <option>Tennessee</option>
                                                                <option>Texas</option>
                                                                <option>Washington</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group clearfix">
                                                            <label for="title">Category</label>
                                                            <div className="icheck-primary">
                                                                <input type="checkbox" id="cat1"/>
                                                                <label for="cat1">Python</label>
                                                            </div>
                                                            <div className="icheck-primary">
                                                                <input type="checkbox" id="cat2"/>
                                                                <label for="cat2">Django</label>
                                                            </div>
                                                            <div className="icheck-primary">
                                                                <input type="checkbox" id="cat3"/>
                                                                <label for="cat3">Wagtail</label>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                        <label for="title">Location</label>
                                                            <select class="form-control select2">
                                                                <option selected="selected">Select Location</option>
                                                                <option>Alaska</option>
                                                                <option>California</option>
                                                                <option>Delaware</option>
                                                                <option>Tennessee</option>
                                                                <option>Texas</option>
                                                                <option>Washington</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <label for="selectImage">Feature Image</label>
                                                            <div className="input-group">
                                                                <div className="custom-file">
                                                                    <input type="file" className="custom-file-input" id="selectImage"/>
                                                                    <label class="custom-file-label" for="selectImage">Choose image</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                        <label for="Tags">Tags</label>
                                                            <select class="form-control select2">
                                                                <option selected="selected">Select Tag</option>
                                                                <option>Alaska</option>
                                                                <option>California</option>
                                                                <option>Delaware</option>
                                                                <option>Tennessee</option>
                                                                <option>Texas</option>
                                                                <option>Washington</option>
                                                            </select>
                                                        </div>
                                                        <button className="btn btn-success btn-inline">Publish</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer text-center">Footer</div>
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
