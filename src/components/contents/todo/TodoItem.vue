<script setup>
import { ref } from "vue";

const props = defineProps({
    todo : Object,
    idx : Number
  })
  
  const emit = defineEmits(['emitDeleteTodo']);

  const emitDeleteTodo = (index) => {
    // console.log("item index :: " , index)
    // debugger
    console.log("item props index :: " , props.idx)
    emit('emitDeleteTodo', index)
  }
  const textInput = ref();
  const saveText = ref(false);


  function changeInput() {
    // console.log(textInput.value)
    textInput.value.removeAttribute('readonly')
    textInput.value.focus()
    saveText.value = true;
  }

  function updateText(e) {
    console.log(e.type , saveText.value)
    
    if(e.type === "blur" && saveText.value ){
        textInput.value.setAttribute('readonly','')
        textInput.value.value = props.todo.text;
        

    }else if (e.type === "keydown"){
        textInput.value.setAttribute('readonly','')
        
        
    }
    saveText.value = false;
  }

//   const updateClick = ref(true)
//   function updateText(e) {
//     console.log(e.type);
//     // console.log(e);
    
//     console.log(props.todo.text)

//     if(e.type === "click") {
//         updateClick.value = false
//         // e.target.removeAttribute('readonly')
        
//     }else if (e.type === "blur" ){
//         e.target.setAttribute('readonly','')
//         e.target._value(props.todo.text);
//     } else if(e.type === "enter"){
//         console.log(e.target.value)
//     }
//     // console.log("oldText :: ",oldText);
//     // console.log("target value ::",e.target.value)
    
    
//     // (e)=> 
//     // console.log("dd" ,e)
//   }

</script>

<!-- ========= template start ========= -->
<template>
    <div>
        <v-divider v-if="idx !== 0" :key="`${idx}-divider`"/>
    <v-list-item>
        <!--  @click="todo.done = !todo.done" -->
        <template v-slot:prepend>
            <v-checkbox-btn v-model="todo.done" color="grey"></v-checkbox-btn>
        </template>

        <v-list-item-title>
            <!-- @click.stop="updateText"
                    @blur.stop= "updateText"
                    @keydown.enter = "updateText" -->
                <!-- <v-text-field 
                    v-bind:model-value="todo.text"
                    :class="todo.done ? 'text-grey-lighten-1' : 'text-balck'"
                    density="conpact"
                    variant="plain"
                    hide-details
                    single-line
                    readonly
                    
                    ></v-text-field> -->
                    <input id ="textInput" ref="textInput" type="text" 
                    readonly :value="todo.text" 
                    style="width:100%"
                    :class="todo.done ? 'text-grey-lighten-1' : 'text-balck'"
                    @blur.stop= "updateText"
                    @keydown.enter = "updateText"
                    @click="changeInput">
                <!-- <v-input type ="text">{{ todo.text }}</v-input> -->
                    <!-- <v-text-field v-else
                    v-bind:model-value="todo.text"
                    :class="todo.done ? 'text-grey-lighten-1' : 'text-balck'"
                    density="conpact"
                    variant="plain"
                    hide-details
                    single-line
                    @click.stop="updateText"
                    @blur.stop= "updateText"
                    @keydown.enter = "updateText"
                    ></v-text-field> -->

                <!-- <span  v-else
                class ="pb-4"
            :class="todo.done ? 'text-grey-lighten-1' : 'text-balck'"
            >{{ todo.text }} </span> -->
            
            
            
            
        </v-list-item-title>

        <span class ="text-caption" 
            :class="todo.done ? 'text-grey-lighten-1' : 'text-success'">{{ todo.dttm }} </span>
        
        <template v-slot:append>

            <v-icon v-if="todo.done" color="success">mdi-check</v-icon>
            <template v-else>
                <!-- <v-icon color="red-darken-1 mr-3" @click.stop="changeInput()">mdi-update</v-icon> -->
                <v-icon color="red-darken-1" @click.stop="emitDeleteTodo(idx)">mdi-delete</v-icon>
            </template >
            
            
        </template>
        
    </v-list-item>
    </div>
    
</template>

<style scoped>
#textInput:focus {outline:none;}
</style>