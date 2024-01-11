<script setup>
const props = defineProps({
    todo : Object,
    idx : Number
  })

  const emit = defineEmits(['emitDeleteTodo']);

  const emitDeleteTodo = (index) => {
    console.log("item index :: " , index)
    debugger
    console.log("item props index :: " , props.idx)
    emit('emitDeleteTodo', index)
  }

</script>

<template>
    <div>
        <v-divider v-if="idx !== 0" :key="`${idx}-divider`"/>
    <v-list-item @click="todo.done = !todo.done">
        
        <template v-slot:prepend>
            <v-checkbox-btn v-model="todo.done" color="grey"></v-checkbox-btn>
        </template>

        <v-list-item-title>
            <span :class="todo.done ? 'text-grey-lighten-1' : 'text-balck'">{{ todo.text }} </span>
        </v-list-item-title>

        <span class ="text-caption" 
            :class="todo.done ? 'text-grey-lighten-1' : 'text-success'">{{ todo.dttm }} </span>
        
        <template v-slot:append>
            <v-icon v-if="todo.done" color="success">mdi-check</v-icon>
            <v-icon v-else color="red-darken-1" @click.stop="emitDeleteTodo(idx)">mdi-delete</v-icon>
        </template>
        
    </v-list-item>
    </div>
    
</template>