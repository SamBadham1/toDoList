<template>
  <div class="row">
    <div class="col">
      <h1>
        Showing {{ toDoItems.length }} Item(s)
        <button type="button" class="pull-right btn btn-primary" @click="getAllToDos">Refresh</button>
      </h1>

      <table class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>To Do</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in toDoItems" :key="item.id">
            <td v-if="item.isCompleted">
              <strike>{{ item.description }}</strike>
            </td>
            <td v-else>
              {{ item.description }}
            </td>

            <td>
              <button type="button" class="btn btn-warning btn-sm" @click="() => handleMarkAsComplete(item)">
                Mark as completed
              </button>
              <button type="button" class="btn btn-warning btn-sm" @click="() => removeToDo(item)">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  props: ['toDoItems'],

  methods: {
    removeToDo(toDo) {
      this.$emit('removeToDo', toDo)
    },

    handleMarkAsComplete(toDo) {
      toDo.isCompleted = true
      this.$emit('updateToDo', toDo)
    },
  },
}
</script>
