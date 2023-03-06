<template>
  <div class="row">
    <div class="container">
      <div class="col col-md-12">
        <div class="row">
          <input
            class="form-control"
            type="text"
            placeholder="Enter description..."
            v-model="newToDo.description"
            @input="handleDescriptionChange"
          />

          <button type="button" class="btn btn-primary" @click="handleAdd">Add Item</button>

          <button type="button" class="btn btn-secondary" @click="handleClear">Clear</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ToDoList from '../axios/toDoList'

const loadToDoList = new ToDoList()
export default {
  data() {
    return {
      newToDo: {
        description: '',
      },
    }
  },

  methods: {
    handleAdd() {
      if (this.newToDo && this.newToDo.description.trim().length > 0) {
        this.$emit('addNewToDo', this.newToDo)

        this.handleClear()
      }
    },

    handleClear() {
      this.newToDo.description = ''
    },

    async handleMarkAsComplete(item) {
      try {
        alert('todo')
      } catch (error) {
        console.error(error)
      }
    },
    handleDescriptionChange(event) {
      // todo
      console.log(event)
    },
  },
}
</script>
