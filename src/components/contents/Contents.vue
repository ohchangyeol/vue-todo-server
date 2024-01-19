<script setup>
    import {useTodoStore} from "@/store/todoStore";
    import { storeToRefs } from 'pinia';
    // import { created } from 'vue';

    const store = useTodoStore();
    
    const { todos } = storeToRefs(store);
    const { fetchTodos } = store;

    // created(()=>{
    fetchTodos();
    // console.log(todos.value)
    // })


</script>

<!-- ========= template start ========= -->
<template>
    <v-main>
        <router-view></router-view>
    </v-main>
</template>
