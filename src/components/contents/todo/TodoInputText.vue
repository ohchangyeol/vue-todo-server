<script setup>
    import { ref } from "vue";

    // const props = defineProps({
    //     color : String,
    //     dttm : String
    // })
    let newTask = ref('');
    const emit = defineEmits({
        emitCreateTodo : (paramObj)=>{
            if(paramObj.text === '') {
                return false;
            }else{
                return true;
            }
        }
    });


    function _emitCreateTodo() {
      if(!newTask.value.trim()){
        alert("공백입력")
        return
      }
        const paramObj = {
            done : false            ,
            text : newTask.value    
            
        };
        emit('emitCreateTodo' , paramObj )
        newTask.value = '';
    }
</script>

<!-- ========= template start ========= -->
<template  >
    <v-text-field
      ref="inputText"
      v-model.trim="newTask"
      label="Add your work!"
      variant="solo"
      :rules="[
        () => !!newTask || 'This field is required',
      ]"
      required
      @input="isActive.value = !isActive.value"
      @keydown.enter="_emitCreateTodo"
      >
      <template v-slot:append-inner>
        <v-fade-transition>
          <v-btn
            v-show="newTask"
            icon="mdi-plus-circle"
            size="x-small"
            variant="text"
            @click="_emitCreateTodo"
          ></v-btn>
        </v-fade-transition>
      </template>
    </v-text-field>
    
</template>