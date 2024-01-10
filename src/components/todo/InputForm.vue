<script setup>
    import {ref ,watch}   from "vue";
    import {todoStore}    from "../../store/todoStore";

    const emit = defineEmits({
        createTodo : (paramObj)=>{
            if(paramObj.text === '') {
                alert("공백이 입력 되었습니다.")
                return false;
            }else{
                return true;
            }
        }
    });

    const dttm = ref((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10));
    let newTask = ref('');

    function emitCreateTodo() {
        const paramObj = {
            done: false,
            text: newTask.value,
            dttm: dttm.value
        };
        emit('createTodo' , paramObj )
        newTask.value = '';
    }

    const formatDate = (date) => {
        return date.toISOString().substr(0, 10);
    }

    watch(dttm, (newDttm)=>{
        if(typeof newDttm !== 'string'){
            dttm.value = formatDate(newDttm);  
        }
    })

</script>

<template>
    <v-menu>
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
      <v-date-picker color="primary" v-model="dttm" ></v-date-picker>
    </v-menu>

    <v-text-field
      v-model="newTask"
      label="Add your work!"
      variant="solo"
      @keydown.enter="emitCreateTodo"
      >
      <template v-slot:append-inner>
        <v-fade-transition>
          <v-btn
            v-show="newTask"
            icon="mdi-plus-circle"
            variant="text"
            @click="emitCreateTodo"
          ></v-btn>
        </v-fade-transition>
      </template>
    </v-text-field>
</template>

