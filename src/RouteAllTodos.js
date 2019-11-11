import React, {Component} from 'react';
import Todo from './Todo';
import { Router, Link, navigate } from '@reach/router'
import {connect} from 'react-redux'
import todosFactory from './redux/todosFactory'

class  RouteAllTodos extends Component {
  
  constructor(props){
    super(props);
  
  }

  handleLogoutClick = (e) =>{
    e.preventDefault()
    this.props.unsetUser()
  }

  componentDidMount(){
    this.props.loadTodos()
  }


  render(){

    return (
          <div className="todos">
            {

              this.props.todos.map((todo) => {
                
                var todoProps = {
                  ...todo,
                  key: todo.id,
           
                };

                return (
                  <Todo {...todoProps}/>
                )
              })
            }
            
            { this.props.currentUser == null ? <Link to="/login">Login</Link> : 
              (<>
                <Link to="/add">Add new todo</Link> | 
                <a href="#" onClick={this.handleLogoutClick}>Logout</a>
              </>)
            }
            
            
          </div>
    );
  }
}

function mapStateToProps(state){
  return {
    todos : state.todos,
    currentUser : state.user
  }
}

function mapDispatchToProps(dispatch){
  return {
    unsetUser: () => {
      var action = {
        type:'UNSET_USER',
      }
      dispatch(action)
    },

    loadTodos:() => {
      dispatch(todosFactory.load())
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(RouteAllTodos) 






