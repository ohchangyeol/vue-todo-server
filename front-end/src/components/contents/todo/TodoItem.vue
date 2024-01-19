<script setup>
    import { ref } from "vue";
    import {useTodoStore} from "@/store/todoStore";
    import { storeToRefs } from 'pinia';

    const store =useTodoStore();
    const {removeTodo , updateTodo } = store;

    const props = defineProps({
        todo : Object,
        idx : Number
    })
  
//   const emit = defineEmits(['emitDeleteTodo']);

//   const emitDeleteTodo = (id) => {
    const deleteTodo = (id) => {
        // console.log("item index :: " , index)
        // debugger
        console.log("item  ID  :: " , id)
        // emit('emitDeleteTodo', id)
        removeTodo(id);
    }
    const textInput = ref();
    const isSaveText = ref(false);


    function changeInput() {
        if (props.todo.done) {
            console.log("완료됨 (수정불가) :: " ,props.todo.done )
            return
        }

        textInput.value.removeAttribute('readonly')
        textInput.value.focus()
        isSaveText.value = true;
    }

    function updateText(e) {
        console.log("updateText :: " , e.type , isSaveText.value)
        
        if(e.type === "blur" && isSaveText.value ){
            textInput.value.setAttribute('readonly','')
            textInput.value.value = props.todo.text;
            
        }else if (e.type === "keydown"){
            textInput.value.setAttribute('readonly','')
            const temp = ref({
                id : props.todo.id,
                text : textInput.value.value,
                dttm : props.todo.dttm,
                color : props.todo.color,
                done : props.todo.done,
            })
            updateTodo(temp.value)
            
        }
        isSaveText.value = false;
    }

    function updateDone () {
        console.log(props.todo.done)
        const temp = ref({
            id : props.todo.id,
            text : props.todo.text,
            dttm : props.todo.dttm,
            color : props.todo.color,
            done : !props.todo.done,
        })
        updateTodo(temp.value)
    }

</script>

<!-- ========= template start ========= -->
<template>
    <div>
        <v-divider v-if="idx !== 0" :key="`${idx}-divider`"/>
    <v-list-item>
        <!--  @click="todo.done = !todo.done" -->
        <template v-slot:prepend>
            <v-checkbox-btn v-model="todo.done" color="grey" @click="updateDone"></v-checkbox-btn>
        </template>

        <v-list-item-title>
                    <input id ="textInput" ref="textInput" type="text" 
                    readonly :value="todo.text" 
                    style="width:100%"
                    :class="todo.done ? 'text-grey-lighten-1' : 'text-balck'"
                    @blur.stop= "updateText"
                    @keydown.enter = "updateText"
                    @click="changeInput">
        </v-list-item-title>

        <span class ="text-caption" 
            :class="todo.done ? 'text-grey-lighten-1' : 'text-success'">{{ todo.dttm }} </span>
        
        <template v-slot:append>

            <v-icon v-if="todo.done" color="success">mdi-check</v-icon>
            <template v-else>
                <!-- <v-icon color="red-darken-1 mr-3" @click.stop="changeInput()">mdi-update</v-icon> -->
                <v-icon color="red-darken-1" @click.stop="deleteTodo(todo.id)">mdi-delete</v-icon>
            </template >
            
            
        </template>
        
    </v-list-item>
    </div>
    
</template>

<style scoped>
#textInput:focus {outline:none;}
</style>