<script setup>
  
  import {todoStore} from "../../store/todoStore";
  import InputForm  from "./InputForm.vue";
  import TodoCount  from "./TodoCount.vue";
  import TodoCard  from "./TodoCard.vue";

  const todos = todoStore.getTodos();

  function createTodo(paramObj) {
    todoStore.addTodo(paramObj);
  }

  const deleteTodo = (index)=> {
    todoStore.removeTodo(index)
  }

</script>

<template>
  <v-container style="max-width: 500px">
    <h2 class ='text-h4 pa-4 font-weight-black text-center' >
      <span>😢 Todo List 😢</span>
    </h2>
    <!-- form -->
    <InputForm @create-todo="createTodo"/>
    <!-- form end-->

    <!-- todo count -->
    <TodoCount :todos = "todos"/>
    <!-- todos count end -->

    <!-- List -->
    <TodoCard :todos = 'todos' @delete-todo ="deleteTodo"/>
    <!-- List end-->
  </v-container>
</template>