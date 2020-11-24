import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Todo } from '../models/Todo';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoUrl:string= 'https://jsonplaceholder.typicode.com/todos';
  todoLimit = '?_limit=10';

  constructor(private http:HttpClient) { }
  //Get Todos
  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.todoUrl}${this.todoLimit}`);
    
  }
  //delete Todo
  deleteTodo(todo:Todo):Observable<Todo>{
    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.delete<Todo>(url,httpOptions);
  }
  // Toggle Completed
  toggleCompleted(todo: Todo): Observable<any>{
    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
}
