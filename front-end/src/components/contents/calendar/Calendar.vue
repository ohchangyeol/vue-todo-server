<script setup>
  import { ref, computed ,watch} from "vue";

  import {useTodoStore} from "@/store/todoStore";
  import { storeToRefs } from 'pinia';
  
  import CalendarTodo from "./CalendarTodo.vue";

  const store =useTodoStore();
  const {todos} = storeToRefs(store);

  const events = ref([])
  const dttm = ref((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10));
  
  
  function getEvents (){
    events.value.splice(0)

    todos.value.forEach(el => {
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
    return todos.value.filter((t) => t.dttm === dttm.value);
  })
  
  // const createTodo = (paramObj) => {
  //   store.addTodo(paramObj);
  // }
  // const deleteTodo = (index)=> {
  //   store.removeTodo(index)
  // }

  watch( todos, ()=>{ 

    getEvents()
  },{ immediate: true , deep:true })


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
        <v-col >
          <v-sheet 
            rounded="lg"
            class="pa-4 bg-blue-lighten-2">
              <v-sheet
              rounded="lg"
              min-height="268"
              :style="`background-color :#d7ebff  `">

              <CalendarTodo 
              :filteredTodos = "filteredTodayTodos"/>
          
            </v-sheet>
          </v-sheet>
          
        </v-col>
      </v-row>
      
    </v-col>
  </v-row>
  
</template>