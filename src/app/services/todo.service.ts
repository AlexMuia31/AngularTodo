import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoUrl:string= 'https://jsonplaceholder.typicode.com/todos';
  todoLimit = '?_limit=10';

  constructor(private http:HttpClient) { }
  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.todoUrl}${this.todoLimit}`);
    
  }
}
