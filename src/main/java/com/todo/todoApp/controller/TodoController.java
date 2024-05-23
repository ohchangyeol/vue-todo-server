package com.todo.todoApp.controller;

import com.todo.todoApp.domain.Todo;
import com.todo.todoApp.service.TodoServie;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class TodoController {
    private final TodoServie todoServie;

    @GetMapping("/api/selectTodo")
    public List<Todo> selectTodo(){
        return todoServie.selectTodo();
    }

    @PostMapping("api/addTodo")
    public Todo addTodo( @RequestBody Todo todo){
        return todoServie.addTodo(todo);
    }

    @DeleteMapping("api/deleteTodo/{id}")
    public void deleteTodo( @PathVariable("id") Long id){
        todoServie.deleteTodo(id);
    }

    @DeleteMapping("api/deleteAllTodo")
    public void deleteAllTodo(){
        todoServie.deleteAllTodo();
    }


    @PutMapping("api/updateTodo")
    public Todo updateTodo( @RequestBody Todo todo){
        return todoServie.updateTodo(todo);
    }
}
