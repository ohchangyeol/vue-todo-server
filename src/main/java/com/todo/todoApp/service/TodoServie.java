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
        return todoRepository.findAll();
    }

    public Todo addTodo(Todo todo) {
          return todoRepository.save(todo);
    }

    public void deleteTodo(Long id) {
        todoRepository.deleteById(id);
    }

    public Todo updateTodo(Todo todo) {
        return todoRepository.save(todo);
    }

    public void deleteAllTodo() {
        todoRepository.deleteAllInBatch();
    }
}
