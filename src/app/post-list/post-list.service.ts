import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



export interface Todo{
  userId?:number,
  id: number,
  title: string,
  body: string
}
@Injectable({
  providedIn: 'root'
})
export class PostListService {
  todos: Todo[] = [];

  constructor(public http: HttpClient) { }
  public getAll(){
    return this.http.get<Todo[]>("https://jsonplaceholder.typicode.com/posts");
 
  }
}
