<script setup>
  
  import { ref , computed} from "vue";
  import {store} from "../../store/todoStore";
  import TodoInputForm  from "./TodoInputForm.vue";
  import TodoCount  from "./TodoCount.vue";
  import TodoCard  from "./TodoCard.vue";

  const todos = store.getTodos();
  let hideCompleted = ref(false);

  const createTodo = (paramObj) => {
    store.addTodo(paramObj);
  }

  const deleteTodo = (index)=> {
    store.removeTodo(index)
  }

  const clearTodos = () => {
    store.clearTodos();
  }

  const filteredTodos = computed(() => {
    return hideCompleted.value
      ? todos.filter((t) => !t.done)
      : todos
  })
  const hideContent = ()=>{
    debugger
    hideCompleted.value = !hideCompleted.value
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
    <TodoCount :todos = "todos" :hideCompleted="hideCompleted" @clear-todos ="clearTodos" @hide-content="hideContent"/>
    <!-- todos count end -->

    <!-- List -->
    <TodoCard :todos = 'filteredTodos' @delete-todo ="deleteTodo"/>
    <!-- List end-->
  </v-container>
</template>