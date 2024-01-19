
import { computed } from "vue"
import { defineStore } from 'pinia';
import axios from 'axios';

const baseUrl = '/api';

export const useTodoStore = defineStore('list',{
	state: () => ({
		todos: [],
        hideCompleted : false
	}),
    actions: {
		async fetchTodos(){
			try{
                
                console.log("======== 할일 목록 조회 시작 ======== ")
				const res = await axios.get(`${baseUrl}/selectTodo`);
				this.todos = res.data;             
                // debugger
                console.log("======== 할일 목록 조회 종료  ======== ")
			} catch (err) {
				console.error('데이터를 로딩하는데 실패하였습니다.', err);
			}
		},
        async insertTodo(payload){
                try{
                    console.log("insert payload ==> " , payload)
                    const { data } = await axios.post(`${baseUrl}/addTodo`, payload);
                    this.todos.push(data);
                } catch (err) {
                    console.error('Post ERROR!', err);
                }
            }, 
        async removeTodo(id){
            try{
                await axios.delete(`${baseUrl}/deleteTodo/${id}`);
                this.todos = this.todos.filter((prev) => prev.id !== id);
                console.log(`======== 할일 삭제 :: ${id} ========`)
            } catch (err) {
                console.error('Post ERROR!', err);
            }
        },
        async removeAllTodo(){
            try{
                await axios.delete(`${baseUrl}/deleteAllTodo`);
                console.log(`======== 할일 전부 삭제 ========`)
            } catch (err) {
                console.error('Post ERROR!', err);
            }
        },
        async updateTodo(payload){
            try{
                await axios.put(`${baseUrl}/updateTodo`, payload)

            } catch (err) {
                console.error('Post ERROR!', err);
            }
        },
        toggleEditMode(){
            this.hideCompleted = !this.hideCompleted
            console.log(this.hideCompleted)
        }
	},
    getters : {
        filteredTodos : (state)=>{
            return state.hideCompleted
            ? state.todos.filter((t) => !t.done)
            : state.todos
        },

        // filteredTodayTodos : (state) => {
        //     console.log(dttm.value)
        //     return todos.value.filter((t) => t.dttm === dttm.value);
        //   }
    }


});

// import { watch, ref, computed } from "vue"
// import axios from "axios";

// const getTodoApi = () => {
//     let temp = '[]';
//      axios.get("/api/selectTodo")
//     .then((res)=>{
//         temp = JSON.stringify(res.data)
//     })
//     return temp;
// }

// const todos = ref(JSON.parse( getTodoApi() ) );


// export const store = {
//     addTodo : (obj)=> {
//         todos.value.push(obj);
//         axios.post("/api/addTodo" , obj)
//     },
//     getTodos : ()=>{
//         return todos.value;
//     },
//     removeTodo: index =>{
//         todos.value.splice(index,1)
//         console.log(todos)
//     },
//     clearTodos : ()=>{
//         todos.value.splice(0)
//     }
    
// }




// watch(todos.value, newVal =>{
//     console.log(newVal);
//     debugger
//     // localStorage.setItem('todos', JSON.stringify(newVal));
// } , {deep:true })
