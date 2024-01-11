<script setup>
    import { computed } from "vue";

    const props = defineProps({
        todos : Array
    })
    const emit = defineEmits(['clearTodos']);


    const completedTodos = computed(()=>{
        return props.todos.filter(todo => todo.done).length
    })
    const progress = computed(()=>{
        return completedTodos.value / props.todos.length * 100
    })
    const remainingTodos = computed(()=>{
        return props.todos.length - completedTodos.value
    })

    const emitClearTodos = () =>{
      emit('clearTodos');
    }
</script>

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
      <div>
        <v-btn @click.stop="emitClearTodos" >clear</v-btn>
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