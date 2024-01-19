<script setup>
    import  {ref} from "vue";
    import {useTodoStore} from "@/store/todoStore";
    
    import  TodoInputText  from "@/components/contents/todo/TodoInputText.vue";
    import  TodoColorInput  from "@/components/contents/todo/TodoColorInput.vue";
    import  TodoCard  from "@/components/contents/todo/TodoCard.vue";

    const props =defineProps({
        filteredTodos : Array
    })

    const { insertTodo } = useTodoStore();
    const dttm = ref((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10));

    const color = ref("");
    
    

    function emitCreateTodo(paramObj) {
        paramObj.dttm = dttm.value;
        paramObj.color = color.value;
        insertTodo(paramObj)
    }
    
    function setupColor(clr) {
        color.value = clr
    }

    
</script>

<!-- ========= template start ========= -->
<template>
    <v-container style="max-width: 500px" >
        <h2 class ='text-h4 font-weight-black mb-4' >
        <span>To do Today.</span>
        </h2>
        <!-- form -->
        <TodoInputText @emit-create-todo="emitCreateTodo" variant="underlined" />
        <TodoColorInput @emit-color ="setupColor" variant="underlined"/>
        <!-- form end-->
        <!-- List -->
        <TodoCard :todos = 'props.filteredTodos' variant="underlined" />
        <!-- List end-->
  </v-container>
</template>

<style scoped>
div {color : #216fff}
</style>