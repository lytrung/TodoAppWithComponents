import React, {Component} from 'react';

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

            { this.props.priority}

          </div>
        </div>
      </div>
		);
	}
}

export default Todo;