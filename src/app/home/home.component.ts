import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  clickCounter: number = 0;
  name: string = 'hello';
  todos: string[] = ["hello", "jedzenie"]

  constructor() {}

  ngOnInit(): void {}

  addTodo(item: string) {
    if(item !== "") {
      this.todos.push(item);
      this.name = ""

    }
  }

  removeTodo(value: string) {
    const newTodos = this.todos.filter(item => item !== value)
    this.todos = newTodos
  }
}
