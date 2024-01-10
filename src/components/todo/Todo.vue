<script setup>
  import { computed, ref, watch } from "vue";
  import {todoStore} from "../../store/todoStore";

  const tasks = todoStore.getTodos();
  const date = ref((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10));
  let newTask = ref('');

  const completedTasks = computed(()=>{
    return tasks.filter(task => task.done).length
  })
  
  const progress = computed(()=>{
    return completedTasks.value / tasks.length * 100
  })
  
  const remainingTasks = computed(()=>{
    return tasks.length - completedTasks.value
  })
 

  function create() {
    todoStore.addTodo({
      done: false,
      text: newTask,
      date: date.value
    });
    newTask = ref('');
  }

  function deleteTodo(index) {
    todoStore.removeTodo(index)
    console.log(tasks)
  }

  watch(date, (newVal)=>{
    if(typeof newVal !== 'string'){
      date.value = formatDate(newVal);  
    }
  })
  
  const formatDate = (date) => {
    return date.toISOString().substr(0, 10);
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
    <v-menu >
      <template v-slot:activator="{props}">
        <v-text-field
            v-model="date"
            label="Picker without buttons"
            prepend-icon="mdi-calendar"
            locale ="ko"
            readonly
            v-bind="props"
          ></v-text-field>
      </template>
      <v-date-picker 
        color="primary" 
        v-model="date" ></v-date-picker>
    </v-menu>
    
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
              
                <v-icon v-if="task.done" color="success">
                  mdi-check
                </v-icon>
              <v-btn v-else density="compact" size="small" icon="mdi-delete" color="fall" @click.stop="deleteTodo(i)"></v-btn>
            </template>
          </v-list-item>
        </template>
      </v-slide-y-transition>
    </v-card>
    <!-- List end-->
  </v-container>
</template>