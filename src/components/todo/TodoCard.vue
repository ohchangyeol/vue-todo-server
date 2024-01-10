<script setup>
// import TodoItem from './TodoItem.vue'

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
    <v-slide-y-transition
      class="py-0"
      group
      tag="v-list"
    >
    <!-- <TodoItem  v-for="(todo, i) in todos" :key="`${i}-${todo.text}`" :todo ="todo" :idx = "i"/> -->

      <template v-for="(todo, i) in todos" :key="`${i}-${todo.text}`">

        <v-divider
        v-if="i !== 0"
        :key="`${i}-divider`"
        ></v-divider>

        <v-list-item @click="todo.done = !todo.done">
        <template v-slot:prepend>
            <v-checkbox-btn v-model="todo.done" color="grey"></v-checkbox-btn>
        </template>

        <v-list-item-title>
            <span :class="todo.done ? 'text-grey-lighten-1' : 'text-balck'">{{ todo.text }} </span>
            
        </v-list-item-title>
        <span :class="todo.done ? 'text-grey-lighten-1' : 'text-success'" class ="text-caption">{{ todo.dttm }} </span>
        <template v-slot:append>
            
            <v-icon v-if="todo.done" color="success">
                mdi-check
            </v-icon>
            
            <v-icon v-else icon="mdi-delete" color="red-darken-1" @click.stop="emitDeleteTodo(i)"></v-icon>
        </template>
        </v-list-item>
    </template>
     </v-slide-y-transition>
  </v-card>
</template>