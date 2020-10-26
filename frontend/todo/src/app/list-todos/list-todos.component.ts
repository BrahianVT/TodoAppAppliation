import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';


export class Todo {
  constructor(public  id: number, public description: string,
    public done: boolean, public targetDate: Date){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    
  ]
  message
  constructor(private todoService: TodoDataService
    , private router : Router) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  addTodo(){
    this.router.navigate(['todos', -1]);
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('Brahian').subscribe(
      response =>{
        console.log(response); this.todos = response;
      }
    );
  }

  deleteTodo(id){
    console.log('delete todo: ' + id);
    this.todoService.deleteTodo('Brahian', id).subscribe(
      response => {
        console.log(response);
        this.message = 'Delete of Todo ' + id + ' succesfully';
        this.refreshTodos();
      }
    );
  }

  updateTodo(id){
    console.log('Update todo: ' + id);
    this.router.navigate(['todos',id]);
  }

}
