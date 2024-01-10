
import { watch, reactive ,computed} from "vue"

let id =0;
let todos = reactive(JSON.parse(localStorage.getItem('todos')) || []);

export const todoStore = {
    addTodo : (obj)=> {
        obj.id = id ++ ;
        todos.push(obj);
    },
    getTodos : ()=>{
        return todos;
    },
    removeTodo: index =>{
        todos.splice(index,1)
        console.log(todos)
    }
    
}

watch(todos, newVal =>{
    localStorage.setItem('todos', JSON.stringify(newVal));
} , {deep:true })

// created (()=>{
//     console.log('마운트')
//     todos = JSON.parse(localStorage.getItem('todos')) || [];
// })
    

