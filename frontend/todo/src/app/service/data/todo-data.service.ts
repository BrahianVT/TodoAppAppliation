import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor( private http : HttpClient) { }

  retrieveAllTodos(username){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

  deleteTodo(username, id){
    return this.http.delete(`http://localhost:8080/users/${username}/todo/${id}`);
  }

  retrieveTodo(username, id){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/getTodoById/${id}`);
  }

  updateTodo(username, id, todo){
    return this.http.put<Todo>(`http://localhost:8080/users/${username}/updateTodoById/${id}`, todo);
  }

  createTodo(username, todo){
    return this.http.post<Todo>(`http://localhost:8080/users/${username}/createTodo`, todo);
  }
}
