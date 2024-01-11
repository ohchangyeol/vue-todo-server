<script setup>
  
  import {store} from "../../store/todoStore";
  import TodoInputForm  from "./TodoInputForm.vue";
  import TodoCount  from "./TodoCount.vue";
  import TodoCard  from "./TodoCard.vue";

  const todos = store.getTodos();

  function createTodo(paramObj) {
    store.addTodo(paramObj);
  }

  const deleteTodo = (index)=> {
    store.removeTodo(index)
  }

  const clearTodos = () => {
    store.clearTodos();
  }
</script>

<template>
  <v-container style="max-width: 500px">
    <h2 class ='text-h4 pa-4 font-weight-black text-center' >
      <span>😢 Todo List 😢</span>
    </h2>
    <!-- form -->
    <TodoInputForm @create-todo="createTodo"/>
    <!-- form end-->

    <!-- todo count -->
    <TodoCount :todos = "todos" @clear-todos ="clearTodos"/>
    <!-- todos count end -->

    <!-- List -->
    <TodoCard :todos = 'todos' @delete-todo ="deleteTodo"/>
    <!-- List end-->
  </v-container>
</template>