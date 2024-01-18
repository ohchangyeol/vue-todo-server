package com.todo.todoApp.service;

import com.todo.todoApp.domain.Todo;
import com.todo.todoApp.repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoServie {
    private final TodoRepository todoRepository;

    public List<Todo> selectTodo(){
        List<Todo> todos = todoRepository.findAll();
        return todos;
    }

    public void addTodo(Todo todo) {
        todoRepository.save(todo);
    }
}
