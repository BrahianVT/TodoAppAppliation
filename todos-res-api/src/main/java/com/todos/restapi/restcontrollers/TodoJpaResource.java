package com.todos.restapi.restcontrollers;

import com.todos.restapi.entities.Todo;
import com.todos.restapi.repository.TodoRepository;
import com.todos.restapi.services.TodoHardcodedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoJpaResource {

    @Autowired
    private TodoRepository todoService;

    @GetMapping("/jpa/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username){
        return todoService.findByUsername(username);
    }

    @DeleteMapping("/jpa/users/{username}/todo/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
        todoService.deleteById(id);
        return  ResponseEntity.noContent().build(); //ResponseEntity.notFound().build();
    }

    @GetMapping("/jpa/users/{username}/getTodoById/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable long id){
        return todoService.findById(id).get();
    }

    @PutMapping("/jpa/users/{username}/updateTodoById/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo){
        Todo todoUpdated = todoService.save(todo);

        return new ResponseEntity<Todo>(todoUpdated, HttpStatus.OK);
    }

    @PostMapping("/jpa/users/{username}/createTodo")
    public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody Todo todo){
        todo.setUsername(username);
        Todo createdTodo = todoService.save(todo);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(createdTodo.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }
}
