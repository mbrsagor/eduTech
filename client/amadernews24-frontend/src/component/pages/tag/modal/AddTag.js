import React, {Component} from 'react'
import ArticleTagService from '../../../services/ArticleTagService'

const articleTagService = new ArticleTagService()

class AddTag extends Component {

    constructor(props){
        super(props);
        this.state = {
            tags : []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCreate(){
        articleTagService.createArticleTag({
            "name" : this.refs.name.value}
        ).then((result)=>{
            console.log(result);
            alert("Tag has been created.");
        }).catch(()=>{
            alert("There was an error! Please re-check your form.");
        });
    }

    handleUpdate(id){
        articleTagService.updateArticleTag({
            "id": id,
            "name": this.refs.name.value}          
        ).then((result)=>{
          console.log(result);
          alert("Tag updated!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }

      handleSubmit(event) {
        const { match: { params } } = this.props;

        if(params && params.pk){
          this.handleUpdate(params.pk);
        }else{
          this.handleCreate();
        }event.preventDefault();
      }

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
                        
                    <form onSubmit={this.handleSubmit}>
                        <div className="card-body">
                            <div className="form-group">
                                <input type="text" ref="name" className="form-control" id="category" placeholder="Enter tag name"/>
                            </div>
                        </div>
                    </form>
                
                    </div>
                    <div className="modal-footer text-right">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-success">Save</button>
                    </div>
                </div>
            </div>
        </div>

        )
    }
}

export default AddTag
