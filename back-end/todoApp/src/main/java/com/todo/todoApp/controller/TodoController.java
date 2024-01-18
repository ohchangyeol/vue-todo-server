package com.todo.todoApp.controller;

import com.todo.todoApp.domain.Todo;
import com.todo.todoApp.service.TodoServie;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class TodoController {
    private final TodoServie todoServie;

    @GetMapping("/api/selectTodo")
    public List<Todo> selectTodo(){
        List<Todo> todos = todoServie.selectTodo();
        return todos;
    }

    @PostMapping("api/addTodo")
    public void addTodo( @RequestBody Todo todo){
        todoServie.addTodo(todo);
    }
}
