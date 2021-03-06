import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';
@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor( private http : HttpClient) { }

  retrieveAllTodos(username){
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }

  deleteTodo(username, id){
    return this.http.delete(`${API_URL}/users/${username}/todo/${id}`);
  }

  retrieveTodo(username, id){
    return this.http.get<Todo>(`${API_URL}/users/${username}/getTodoById/${id}`);
  }

  updateTodo(username, id, todo){
    return this.http.put<Todo>(`${API_URL}/users/${username}/updateTodoById/${id}`, todo);
  }

  createTodo(username, todo){
    return this.http.post<Todo>(`${API_URL}/users/${username}/createTodo`, todo);
  }
}
