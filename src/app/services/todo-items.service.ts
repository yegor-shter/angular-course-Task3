import { Injectable } from '@angular/core';
import {ITodo} from './../interfaces/ITodo.interface';


@Injectable()
export class TodoItemsService {

  constructor() { }

  getTodos(): Promise<ITodo[]> {
    let todos = JSON.parse(window.localStorage.getItem('todos'));
    return Promise.resolve(todos);
  }
}
