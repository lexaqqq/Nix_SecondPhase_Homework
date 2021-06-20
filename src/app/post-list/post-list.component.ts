import { OnInit, Component } from '@angular/core';
import { PostListService } from './post-list.service';

export interface Todo{
  userId?:number,
  id: number,
  title: string,
  body: string
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  todos: Todo[] = [];
  constructor(public postlistservice: PostListService) { }

  ngOnInit(){


  this.postlistservice.getAll().subscribe(todos =>{
    this.todos = todos;
  })
  }
}
