<script setup>
  import { ref, computed ,watch} from "vue";
  import {store} from "@/store/todoStore";
  import CalendarTodo from "./CalendarTodo.vue";

  const events = ref([])
  const dttm = ref((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10));
  const todos = store.getTodos();
  


  const getEvents = ()=> {
    events.value.splice(0)
    console.log(todos);

    todos.forEach(el => {
      events.value.push({
        title: el.text,
        color: el.color,
        start: new Date (el.dttm),
        end: new Date (el.dttm),
        allDay: el.done ,
      })
    });
    
  } 
    
  const filteredTodayTodos = computed(() => {
    console.log(dttm.value)
    return todos.filter((t) => t.dttm === dttm.value);
  })
  
  const createTodo = (paramObj) => {
    store.addTodo(paramObj);
  }
  const deleteTodo = (index)=> {
    store.removeTodo(index)
  }

  watch( todos , ()=>{ 
        getEvents()
    },{ immediate: true })

</script>

<!-- ========= template start ========= -->
<template>
  <v-row class="fill-height pa-4">
    <v-col cols="12" md="8" >
      <v-sheet rounded="lg">
        <v-calendar
          ref="calendar"
          color="primary"
          type="month"
          :events="events"
        ></v-calendar>
      </v-sheet>
    </v-col>

    <v-col cols="12" md ="4">
      <v-row  class="d-flex flex-column align-center justify-center"> 
        <v-col class="pa-4" min-height="64">
           　
        </v-col>
        <v-col class="pa-4">
          <v-sheet
            rounded="lg"
            min-height="268"
            class ="bg-blue-lighten-4 pa-4">
          
            <CalendarTodo 
            :filteredTodos = "filteredTodayTodos" 
            @create-todo="createTodo" 
            @delete-todo="deleteTodo"/>
        
          </v-sheet>
        </v-col>
      </v-row>
      
    </v-col>
  </v-row>
  
</template>