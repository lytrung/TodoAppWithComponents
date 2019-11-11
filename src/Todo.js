import React, {Component} from 'react';
import {connect} from 'react-redux'
import {deleteTodosAction} from './redux/todosFactory';


class Todo extends Component{
	constructor(props){
		super(props)
    this.state = {
      updatingContent:false,
      updatingPriority:false,
      contentInput:props.content,
      priorityInput:props.priority
    };

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

            { this.props.content }

          </div>
          <div className="todo-priority">

            { this.props.priority} | By: { this.props.username}

          </div>
        </div>
      </div>
		);
	}
}

function mapDispatchToProps(dispatch){
  return {
    // removeTodo: (id) => {
    //   var action = {
    //     type:'REMOVE_TODO',
    //     payload:id
    //   }
    //   dispatch(action)
    // },

    removeTodo: (id) => {
      dispatch(deleteTodosAction(id))
    }
  }
}

export default connect(null,mapDispatchToProps)(Todo);




