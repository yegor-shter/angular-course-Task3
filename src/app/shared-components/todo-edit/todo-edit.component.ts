import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ITodo} from './../../interfaces/ITodo.interface';
import {TodoItemService} from './../../services/todo-item.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css'],
  providers: [TodoItemService]
})
export class TodoEditComponent implements OnInit {

  @Input()
  public todoId: number;
  public todo: ITodo;

  @Output()
  public onSaveSuccess = new EventEmitter();

  constructor( private todoItemService: TodoItemService) { }

  ngOnInit() {
    this.todoItemService.getItem(this.todoId)
    .then((todo) => {
      this.todo = todo;
    });
  }

  save () {
    this.todoItemService.saveItem();
    this.onSaveSuccess.emit();
  }
}
