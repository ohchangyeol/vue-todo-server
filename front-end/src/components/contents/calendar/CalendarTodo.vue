<script setup>
    import  {ref} from "vue";
    import  TodoInputText  from "@/components/contents/todo/TodoInputText.vue";
    import  TodoColorInput  from "@/components/contents/todo/TodoColorInput.vue";
    import  TodoCard  from "@/components/contents/todo/TodoCard.vue";

    const props =defineProps({
        filteredTodos : Array
    })

    const emit = defineEmits(['createTodo' ,'deleteTodo' ]);

    const dttm = ref((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10));

    const color = ref("");
    
    

    function emitCreateTodo(paramObj) {
        paramObj.dttm = dttm.value;
        paramObj.color = color.value;
        emit('createTodo' , paramObj )
    }
    
    function setupColor(clr) {
        color.value = clr
    }

    const deleteTodo = (index)=> {
        emit('deleteTodo' , index)
        //store.removeTodo(index)
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
        <TodoCard :todos = 'props.filteredTodos' @delete-todo ="deleteTodo" variant="underlined" />
        <!-- List end-->
  </v-container>
</template>

<style scoped>
div {color : #216fff}
</style>