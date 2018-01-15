import { Component, OnInit, Input } from '@angular/core';
import {ITodo} from './../../interfaces/ITodo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input()
  public todo: ITodo;
  constructor() { }

  ngOnInit() {
  }

}
