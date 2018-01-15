import { Component, ViewChild, Inject, OnInit } from '@angular/core';
import {TodoItemsService} from './services/todo-items.service';
import {ITodo} from './interfaces/ITodo.interface';
import {SliderComponent} from './shared-components/slider/slider.component';
import {TagService} from './services/tags.service';
import {statusCodesToken} from './tokens/app-tokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public todos: ITodo[];

  @ViewChild('slider', {read: SliderComponent} )
  private slider: SliderComponent;

  public openTodoIds: number[] =[];

  constructor(
    private todoItemSerbice: TodoItemsService,
    private tagService: TagService,
    @Inject(statusCodesToken) private statusCodesToken: any
  ) {
    console.log(this);
  }

  ngOnInit() {
    this.todoItemSerbice.getTodos().then((todos) => {
      this.todos = todos;
    })
  }

  openEditTodo(id: number) {
    if (this.openTodoIds.length > 3) {
      this.openTodoIds.shift();
    }

    this.openTodoIds.push(id);
  }

  updateList() {
    this.todoItemSerbice.getTodos()
    .then((todos) => {
      this.todos = todos;
    })
    console.log('list updated');
  }

  moveLeft() {
    this.slider.scrollLeft();
  }

  moveRight() {
    this.slider.scrollRight();
  }
}
