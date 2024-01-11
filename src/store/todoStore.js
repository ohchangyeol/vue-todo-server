
import { watch, ref } from "vue"

const todos = ref(JSON.parse(localStorage.getItem('todos')) || []);


export const store = {
    addTodo : (obj)=> {
        todos.value.push(obj);
    },
    getTodos : ()=>{
        return todos.value;
    },
    removeTodo: index =>{
        todos.value.splice(index,1)
        console.log(todos)
    },
    clearTodos : ()=>{
        todos.value.splice(0)
    }
    
}

watch(todos.value, newVal =>{
    localStorage.setItem('todos', JSON.stringify(newVal));
} , {deep:true })
