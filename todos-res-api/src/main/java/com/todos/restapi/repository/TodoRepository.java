package com.todos.restapi.repository;

import com.todos.restapi.entities.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TodoRepository  extends JpaRepository<Todo, Long> {
    List<Todo> findByUsername(String username);
}
