package com.todo.todoApp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Todo {
    @Id
    Long id;
    
}
