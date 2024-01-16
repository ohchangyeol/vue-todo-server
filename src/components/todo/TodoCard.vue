<script setup>
import TodoItem from './TodoItem.vue'

  const props = defineProps({
    todos : Array
  })
  const emit = defineEmits(['deleteTodo']);

  const emitDeleteTodo = (index) => {
    emit('deleteTodo', index)
  }
</script>


<template>
  <v-card v-if="todos.length > 0">
    <v-slide-x-transition class="py-0" group tag="v-list">
        <TodoItem :todo ='todo' :idx='i' v-for="(todo, i) in todos" :key="`${i}-${todo.text}`" @emit-delete-todo="emitDeleteTodo"/>
     </v-slide-x-transition>
  </v-card>
</template>