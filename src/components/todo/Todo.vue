<script setup>
  import { computed, ref, onMounted } from "vue";
  import {todoStore} from "../../store/todoStore";

  const tasks = todoStore.getTodos();

  let newTask = ref('');

  console.log(todoStore);

  const completedTasks = computed(()=>{
    return tasks.filter(task => task.done).length
  })

  const progress = computed(()=>{
    return completedTasks / tasks.length * 100
  })

  const remainingTasks = computed(()=>{
    return tasks.length - completedTasks
  })

  function create() {
    todoStore.addTodo({
      done: false,
      text: newTask,
    });
    newTask = ref('');
  }



</script>

<template>
  <v-container style="max-width: 500px">
    <h2 class ='text-h4 pa-4'>
      😢 todo List 😢
    </h2>
    
    <!-- form -->
    <v-text-field
      v-model="newTask"
      label="Add your work!"
      variant="solo"
      @keydown.enter="create"
    >
      <template v-slot:append-inner>
        <v-fade-transition>
          <v-btn
            v-show="newTask"
            icon="mdi-plus-circle"
            variant="text"
            @click="create"
          ></v-btn>
        </v-fade-transition>
      </template>
    </v-text-field>

    <!-- form end-->

    <!-- task -->
    <h2 class="text-h4 text-success ps-4">
      Tasks:&nbsp;
      <v-fade-transition leave-absolute>
        <span :key="`tasks-${tasks.length}`">
          {{ tasks.length }}
        </span>
      </v-fade-transition>
    </h2>

    <v-divider class="mt-4"></v-divider>

    <v-row
      class="my-1"
      align="center"
    >
      <strong class="mx-4 text-info-darken-2">
        Remaining: {{ remainingTasks }}
      </strong>

      <v-divider vertical></v-divider>

      <strong class="mx-4 text-success-darken-2">
        Completed: {{ completedTasks }}
      </strong>

      <v-spacer></v-spacer>

      <v-progress-circular
        v-model="progress"
        class="me-2"
      ></v-progress-circular>
    </v-row>

    <!-- task end -->

    <v-divider class="mb-4"></v-divider>
    <!-- List -->
    <v-card v-if="tasks.length > 0">
      <v-slide-y-transition
        class="py-0"
        group
        tag="v-list"
      >
        <template v-for="(task, i) in tasks" :key="`${i}-${task.text}`">
          <v-divider
            v-if="i !== 0"
            :key="`${i}-divider`"
          ></v-divider>

          <v-list-item @click="task.done = !task.done">
            <template v-slot:prepend>
              <v-checkbox-btn v-model="task.done" color="grey"></v-checkbox-btn>
            </template>

            <v-list-item-title>
              <span :class="task.done ? 'text-grey' : 'text-primary'">{{ task.text }}</span>
            </v-list-item-title>

            <template v-slot:append>
              <v-expand-x-transition>
                <v-icon v-if="task.done" color="success">
                  mdi-check
                </v-icon>
              </v-expand-x-transition>
            </template>
          </v-list-item>
        </template>
      </v-slide-y-transition>
    </v-card>
    <!-- List end-->
  </v-container>
</template>



// <script>
//   export default {
//     data: () => ({
//       tasks: [],
//       newTask: null,
//     }),

//     computed: {
//       completedTasks () {
//         return this.tasks.filter(task => task.done).length
//       },
//       progress () {
//         return this.completedTasks / this.tasks.length * 100
//       },
//       remainingTasks () {
//         return this.tasks.length - this.completedTasks
//       },
//     },

//     methods: {
//       create () {

//         this.tasks.push({
//           done: false,
//           text: this.newTask,
//         })
        
//         localStorage.setItem('todos', JSON.stringify(this.tasks));
        
        

//         this.newTask = null
//       },
//     },
//   }
// </script>