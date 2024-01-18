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
                alert("공백이 입력 되었습니다.")
                return false;
            }else{
                return true;
            }
        }
    });

    function _emitCreateTodo() {
        const paramObj = {
            done : false            ,
            text : newTask.value    
            
        };
        emit('emitCreateTodo' , paramObj )
        newTask.value = '';
    }
</script>

<!-- ========= template start ========= -->
<template>
    <v-text-field
      v-model="newTask"
      label="Add your work!"
      variant="solo"
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