import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
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