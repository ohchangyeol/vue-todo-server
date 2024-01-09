
import { watch, onMounted , reactive } from "vue"

    let todos = reactive([]);

    export const todoStore = {
        addTodo : (obj)=> {
            todos.push(obj);
        },
        getTodos : ()=>{
            return todos;
        },
        setTodo (){
            todos = JSON.parse(localStorage.getItem('todos')) || [];
        }
    }

    watch(todos, newVal =>{
        localStorage.setItem('todos', JSON.stringify(newVal));
    } , {deep:true })

    // onMounted (()=>{
    //     console.log('마운트')
    //     todos = JSON.parse(localStorage.getItem('todos')) || [];
    // })
    

