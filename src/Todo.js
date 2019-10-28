import React, {Component} from 'react';
import { connect } from 'react-redux'; /* code change */

class Todo extends Component{
	constructor(props){
		super(props)


	}
  handleTodoRemoveClick = () =>{
    var id = this.props.id;
    this.props.removeTodo(id);
  }

  


	render(){

		return (
			<div className="todo">
        <div className="todo-body">
          <i onClick={this.handleTodoRemoveClick} className="far fa-times-circle todo-remove"></i>
          <div className="todo-content">

            {  this.props.content }

          </div>
          <div className="todo-priority" >

            { this.props.priority}

          </div>
        </div>
      </div>
		);
	}
}


function mapDispatchToProps(dispatch) {
    return {
        removeTodo: id => {

          var action = {
            type: 'DELETE_TODO',
              payload: id
          }

          dispatch(action)
        }
    };
}
export default connect(null,mapDispatchToProps)(Todo);
