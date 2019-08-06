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

  handleContentDoubleClick = () =>{
    this.setState({updatingContent:true});
  }

  handlePriorityDoubleClick = () =>{
    this.setState({updatingPriority:true});
  }

  handleContentInputBlur = () =>{
    var id = this.props.id;
    var data = {
      content: this.state.contentInput
    };
    this.props.updateTodo(id,data);
    this.setState({updatingContent:false});
  }

  handlePriorityInputBlur = () =>{
    var id = this.props.id;
    var data = {
      priority: this.state.priorityInput
    };
    this.props.updateTodo(id,data);

    this.setState({updatingPriority:false});
  }

  handleContentInputChange = (e) =>{
    this.setState({contentInput:e.target.value});
  } 

  handlePriorityInputChange = (e) =>{
    this.setState({priorityInput:e.target.value});
  } 

	render(){

		return (
			<div className="todo">
        <div className="todo-body">
          <i onClick={this.handleTodoRemoveClick} className="far fa-times-circle todo-remove"></i>
          <div className="todo-content" onDoubleClick={this.handleContentDoubleClick}>

            { this.state.updatingContent ? (
                <input value={this.state.contentInput} onChange={this.handleContentInputChange} onBlur={this.handleContentInputBlur} autoFocus type="text" className="form-control"/>
              ) : this.props.content }

          </div>
          <div className="todo-priority" onDoubleClick={this.handlePriorityDoubleClick}>

            { this.state.updatingPriority? (
                <input value={this.state.priorityInput} onChange={this.handlePriorityInputChange}  onBlur={this.handlePriorityInputBlur} autoFocus type="text" className="form-control form-control-sm"/>
              ) : this.props.priority}

          </div>
        </div>
      </div>
		);
	}
}

export default Todo;