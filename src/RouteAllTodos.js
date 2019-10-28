import React, {Component} from 'react';
import Todo from './Todo';
import { Router, Link } from "@reach/router"


class  RouteAllTodos extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      todos:[
        {
          id:1,
          content: 'Ring Peter',
          priority: 'Important'
        },
        {
          id:2,
          content: 'Water plants',
          priority: 'Urgent'
        },
        {
          id:3,
          content: 'Get milk',
          priority: 'Can wait'
        }
      ]
    };
  }

  addTodo = (data) =>{
    var newTodo = {
      id:Date.now(),
      ...data
    };
    var newList = [newTodo,...this.state.todos];
    this.setState({
      todos: newList
    });
  }
  removeTodo = (id) =>{
    var todos = this.state.todos;

    var filtered = todos.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({
      todos: filtered
    });

  }


  render(){
    return (
          <div className="todos">
            {
              this.state.todos.map((todo) => {
                
                var todoProps = {
                  ...todo,
                  key: todo.id,
                  removeTodo: this.removeTodo,
           
                };

                return (
                  <Todo {...todoProps}/>
                )
              })
            }
            

          </div>
    );
  }
}

export default RouteAllTodos;






