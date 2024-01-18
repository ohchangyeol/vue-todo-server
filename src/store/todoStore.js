
import { watch, ref, computed } from "vue"
import axios from "axios";

const getTodoApi = () => {
    let temp = '[]';
     axios.get("/api/selectTodo")
    .then((res)=>{
        temp = JSON.stringify(res.data)
    })
    return temp;
}

const todos = ref(JSON.parse( getTodoApi() ) );


export const store = {
    addTodo : (obj)=> {
        todos.value.push(obj);
        axios.post("/api/addTodo" , obj)
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




// watch(todos.value, newVal =>{
//     console.log(newVal);
//     debugger
//     // localStorage.setItem('todos', JSON.stringify(newVal));
// } , {deep:true })
