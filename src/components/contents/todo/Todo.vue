<script setup>
  
  import {useTodoStore} from "@/store/todoStore";
  import { storeToRefs } from 'pinia';

  import TodoInputForm  from "./TodoInputForm.vue";
  import TodoCount  from "./TodoCount.vue";
  import TodoCard  from "./TodoCard.vue";

  const store =useTodoStore();
  const {todos} = storeToRefs(store);
  // const {insertTodo } = store;

  // let hideCompleted = ref(false);

  // const createTodo = (paramObj) => {
  //   insertTodo(paramObj);
  // }

  // const hideContent = ()=>{
  //   debugger
  //   hideCompleted.value = !hideCompleted.value
  // }

  // onMounted(()=>{
  //   console.log("todo 마운트 ");
  // })

</script>

<!-- ========= template start ========= -->
<template>
  <v-container style="max-width: 500px">
    <h2 class ='text-h4 pa-4 font-weight-black text-center' >
      <span>😢 Todo List 😢</span>
    </h2>
    <!-- form -->
    <TodoInputForm/>
    <!-- form end-->

    <!-- todo count -->
    <TodoCount :todos = "todos"/>
    <!-- todos count end -->

    <!-- List -->
    <TodoCard :todos = 'store.filteredTodos'/>
    <!-- List end-->
  </v-container>
</template>