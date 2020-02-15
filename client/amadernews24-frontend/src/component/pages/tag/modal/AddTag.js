import React, {Component} from 'react'

class AddTag extends Component {
    render(){
        return(

        <div className="modal fade" id="open-modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Add new Tag</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        
                    <form name="form">
                        <div className="card-body">
                            <div className="form-group">
                                <input type="text" className="form-control" id="category" placeholder="Enter tag name"/>
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

        )
    }
}

export default AddTag
