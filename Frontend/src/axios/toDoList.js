import axios from 'axios'

export default class ToDoListHelpers {
  getAllTodos() {
    return new Promise((resolve, reject) => {
      axios
        .get('http://localhost:7000/api/todoItems')
        .then((result) => {
          resolve(result)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
  postNewToDo(toDoItem) {
    return new Promise((resolve, reject) => {
      axios
        .post('http://localhost:7000/api/todoItems', toDoItem)
        .then((result) => {
          resolve(result)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  removeToDo(ID) {
    console.log(ID)
    return new Promise((resolve, reject) => {
      axios
        .delete(`http://localhost:7000/api/todoItems/${ID}`)
        .then((result) => {
          resolve(result)
        })
        .catch((error) => {
          console.log('error')
          reject(error)
        })
    })
  }

  updateTodo(toDo) {
    return new Promise((resolve, reject) => {
      axios
        .put(`http://localhost:7000/api/todoItems/${toDo.id}`, toDo)
        .then((result) => {
          resolve(result)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
