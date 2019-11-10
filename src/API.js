import axios from 'axios';

var urlPrefix = 'http://localhost:3001/api'
var serverUrl = 'http://localhost:3001/'

var getTodos = () => {
    return axios.get(urlPrefix+'/todos')
   
}



var addTodos = (data) => {
    return axios.post(urlPrefix+'/todos',data)
}


var deleteTodos = (id) => {
    return axios.delete(urlPrefix+'/todos/'+id)

}



export {serverUrl,getTodos, addTodos,,deleteTodos}




