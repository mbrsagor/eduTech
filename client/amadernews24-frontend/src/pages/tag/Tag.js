import React, { Component } from 'react'
import AddTag from './modal/AddTag'
import Footer from '../../component/common/Footer'
import Sidebar from '../../component/common/Sidebar'
import ArticleTagService from '../../component/services/ArticleTagService'
import * as moment from 'moment'

const articleTagService = new ArticleTagService()

class Tag extends Component {

    constructor(props){
        super(props);
        this.state = {
            tags : [],
        };
        
        this.handleDelete  =  this.handleDelete.bind(this);
    }

    componentDidMount(){
        var self = this;
        articleTagService.getArticleTag().then(function(result){
            console.log(result);
            self.setState({tags:result})
        });
    }

    handleDelete(e, id){
        var  self  =  this;
        articleTagService.deleteArticelTag({id : id}).then(() =>{
            var _tag = self.state.tags.filter(function(obj){
                return obj.id !== id;
            });
            self.setState({tags: _tag});
        }).catch(()=>{
            alert('There was an error! Please re-check your form.');
        });
    }

    render(){
        return(
            <div>
              <Sidebar />
              <div className="content-wrapper">
                    {/* Page title start */}
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0 text-dark">Tag</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                                        <li className="breadcrumb-item active">Tag</li>
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
                                        <h3 className="card-title">List of tag</h3>
                                        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#open-modal"><i className="fas fa-plus"></i> New</button>
                                    </div>
                                    <AddTag/>
                                    <div className="card-body">
                                    <table className="table table-bordered table-hover">
                                        <thead>
                                        <tr>
                                        <th>Tag Name</th>
                                        <th>Created Date</th>
                                        <th>Updated Date</th>
                                        <th>Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {this.state.tags.map(tag =>
                                        <tr key={tag.id}>
                                            <td>{tag.name}</td>
                                            <td>{moment(tag.created_at).format('DD/MM/YYYY h:mm a')}</td>
                                            <td>{moment(tag.updated_at).format('DD/MM/YYYY h:mm a')}</td>
                                            <td>
                                                <button title="You may update the tag from here" type="button" className="btn btn-info btn-flat btn-sm mr-2"><i className="fas fa-edit"></i></button>
                                                <button onClick={(e) => this.handleDelete(e, tag.id)} title="You may delete/remove the tag from here" type="button" className="btn btn-danger btn-sm btn-flat"><i className="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                        )}
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
export default Tag
