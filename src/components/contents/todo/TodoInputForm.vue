<script setup>
    import {useTodoStore} from "@/store/todoStore";
    import {ref ,watch}   from "vue";
    import  TodoColorInput  from "./TodoColorInput.vue";
    import  TodoInputText  from "./TodoInputText.vue";

  
  const { insertTodo } = useTodoStore();

    const dttm = ref((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10));

    const color = ref("");
    
    const emit = defineEmits(['createTodo']);

    function emitCreateTodo(paramObj) {
        paramObj.dttm = dttm.value;
        paramObj.color = color.value;
        // emit('createTodo' , paramObj )
        insertTodo(paramObj); 
        
    }
    
    function setupColor(clr) {
        color.value = clr
    }
    
    watch(dttm, (newDttm)=>{
        if(typeof newDttm !== 'string'){
            dttm.value = date.toISOString().substr(0, 10);  
        }
    })

    

</script>

<!-- ========= template start ========= -->
<template>
    <!-- 일단 주석 치고 다른것으로 사용함... -->
    <!-- <v-menu>
      <template v-slot:activator="{props}">
        <v-text-field
            v-model="dttm"
            label="Write down the date of your to-do!"
            prepend-icon="mdi-calendar"
            locale ="ko"
            readonly
            v-bind="props"
            ></v-text-field>
      </template>
      <v-date-picker color="primary" show-adjacent-months v-model="dttm" ></v-date-picker>
    </v-menu> -->
    
    <v-text-field type="date" label="Date" v-model="dttm"></v-text-field>

    <TodoInputText  @emit-create-todo="emitCreateTodo"/>

    <TodoColorInput @emit-color ="setupColor"/>
</template>

