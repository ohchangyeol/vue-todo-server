// routes/index.js
import { createRouter, createWebHistory  } from 'vue-router';

import Todo from "@/components/todo/Todo.vue"
import Calendar from "@/components/calendar/Calendar.vue"

const routes =[
  {
    path: '/',
    redirect: '/todos',
  },
  {
    name : "Todos",
    path : "/todos",
    component : Todo,
    icon : "mdi-notebook-plus-outline",
  },
  {
    name : "Calendar" ,
    path: "/calendar",
    component: Calendar,
    icon : "mdi-calendar"
  }
];

export function installRouter (app) {
  const router = createRouter({
    // 4. 사용할 히스토리 모드 정의. 여기서는 간단하게 해시 모드를 사용.
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes, // `routes: routes`와 같음
  })
  app.use(router)
}
