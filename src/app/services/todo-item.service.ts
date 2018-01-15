import { Injectable } from '@angular/core';
import {ITodo} from './../interfaces/ITodo.interface';

@Injectable()
export class TodoItemService {
  public item: ITodo;

  constructor() { }

  getItem (id: number): Promise<ITodo> {

    let todos = JSON.parse(localStorage.getItem('todos'));
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        this.item = todos[i];
        break;
      }
    }
    return Promise.resolve(this.item);
  }

  saveItem() {
    let todos: ITodo[] = JSON.parse(localStorage.getItem('todos'));
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === this.item.id) {
        Object.assign(todos[i], this.item);
        break;
      }
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  }

}
