<script>
import ToDoList from './ToDoList.vue'
import AddToDo from './AddToDo.vue'
import ToDoListHelper from '../axios/toDoList'
const loadToDoList = new ToDoListHelper()

export default {
  components: {
    ToDoList,
    AddToDo,
  },
  data() {
    return {
      toDos: [],
      listKey: 0,
    }
  },

  mounted() {
    this.getAllToDos()
  },

  methods: {
    async getAllToDos() {
      const toDos = await loadToDoList.getAllTodos()
      this.toDos = toDos.data
      this.listKey++
    },

    async handleAdd(newToDo) {
      try {
        if (newToDo.description && newToDo.description.length > 0) {
          newToDo.isComplete = false
          const addToDo = await loadToDoList.postNewToDo(newToDo)
          console.log('addToDo')
          console.log(addToDo)
          this.getAllToDos()
        }
      } catch (error) {
        console.log('error 1')
        this.errorMessage(error.response.data.toString())
        alert(error.response.data.toString())
      }
    },
    async removeToDo(item) {
      const removeToDo = await loadToDoList.removeToDo(item.id)
      this.getAllToDos()
    },

    async updateTodo(item) {
      const removeToDo = await loadToDoList.updateTodo(item)
      this.getAllToDos()
    },

    errorMessage(message) {
      this.$bvToast.toast(
        this.$bvToast.toast(message, {
          title: 'Error',
          autoHideDelay: 5000,
          appendToast: append,
        }),
        {
          title: 'BootstrapVue Toast',
          autoHideDelay: 5000,
          appendToast: append,
        }
      )
    },
  },
}
</script>
<template>
  <add-to-do @addNewToDo="handleAdd"></add-to-do>
  <br />
  <to-do-list :key="listKey" :toDoItems="this.toDos" @removeToDo="removeToDo" @updateToDo="updateTodo"></to-do-list>
</template>
