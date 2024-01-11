
import { watch, reactive } from "vue"

const todos = reactive(JSON.parse(localStorage.getItem('todos')) || []);


export const store = {
    addTodo : (obj)=> {
        todos.push(obj);
    },
    getTodos : ()=>{
        return todos;
    },
    removeTodo: index =>{
        todos.splice(index,1)
        console.log(todos)
    },
    clearTodos : ()=>{
        todos.splice(0)
    }
    
}

watch(todos, newVal =>{
    localStorage.setItem('todos', JSON.stringify(newVal));
} , {deep:true })
