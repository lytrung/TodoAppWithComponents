import React, {Component} from 'react';
import Todo from './Todo';
import { connect } from 'react-redux'; /* code change */
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




  render(){
    return (
          <div className="todos">
            {
              this.props.todos.map((todo) => {
                
                var todoProps = {
                  ...todo,
                  key: todo.id
           
                };

                return (
                  <Todo {...todoProps}/>
                )
              })
            }
            
            <Link to="/add">Add</Link>
          </div>
    );
  }
}



// start of code change
const mapStateToProps = (state) => {


  return { todos: state }
};



export default connect(mapStateToProps)(RouteAllTodos);







