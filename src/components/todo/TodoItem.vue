<script setup>
const props = defineProps({
    todo : Object,
    idx : Number
  })
  
</script>

<template>
    <v-divider
        v-if="idx !== 0"
        :key="`${idx}-divider`"
        ></v-divider>

    <v-list-item @click="todo.done = !todo.done">
        <template v-slot:prepend>
            <v-checkbox-btn v-model="todo.done" color="grey"></v-checkbox-btn>
        </template>

        <v-list-item-title>
            <span :class="todo.done ? 'text-grey-lighten-1' : 'text-balck'">{{ todo.text }} </span>
            
        </v-list-item-title>
        <span :class="todo.done ? 'text-grey-lighten-1' : 'text-success'" class ="text-caption">{{ todo.dttm }} </span>
        <template v-slot:append>
            
            <v-icon v-if="todo.done" color="success">
                mdi-check
            </v-icon>
            
            <v-icon v-else icon="mdi-delete" color="red-darken-1" ></v-icon>
        </template>
        </v-list-item>
</template>