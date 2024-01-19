<script setup>
  import { computed  } from "vue";
  import {useTodoStore} from "@/store/todoStore";

  const store = useTodoStore();
  const { toggleEditMode, removeAllTodo } = store;
  const props = defineProps({
      todos : Array,
  })
  // const emit = defineEmits(['clearTodos' , 'hideContent']);

  const completedTodos = computed(()=>{
      return props.todos.filter(todo => todo.done).length
  })
  const progress = computed(()=>{
      return completedTodos.value / props.todos.length * 100
  })
  const remainingTodos = computed(()=>{
      return props.todos.length - completedTodos.value
  })

  const clearTodos = () =>{
    removeAllTodo()
    store.$reset();
  }

  function hideToggle(){
    toggleEditMode();
  }
  
</script>

<!-- ========= template start ========= -->
<template>
  <div class ="d-flex justify-space-between">
      <div>
        <h2 class="text-h4 font-weight-black text-blue-lighten-1">
          <span>Todos :&nbsp;</span>
          <v-fade-transition leave-absolute>
            <span :key="`todos-${todos.length}`">
              {{ todos.length }}
            </span>
          </v-fade-transition>
        </h2>  
      </div>
      <div class ="d-flex align-center justify-space-between">
        <div fluid class ="mr-2">
          <v-switch
            color="primary"
            label="hide"
            hide-details
            @click.stop="hideToggle"
          ></v-switch>
        </div>
        <v-spacer></v-spacer>
        <v-btn @click.stop="clearTodos" > clear</v-btn>
      </div>
      
  </div>
  <v-divider class="mt-4"></v-divider>

  <v-row
    class="my-1"
    align="center"
  >
    <strong class="mx-4 text-info-darken-2">
      Remaining: {{ remainingTodos }}
    </strong>

    <v-divider vertical></v-divider>

    <strong class="mx-4 text-success-darken-2">
      Completed: {{ completedTodos }}
    </strong>

    <v-spacer></v-spacer>

    <v-progress-circular
    color="blue-lighten-1"
      v-model="progress"
      class="me-2"
    ></v-progress-circular>
  </v-row>
  <v-divider class="mb-4"></v-divider>
</template>