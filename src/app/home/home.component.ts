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

  countClick(): void {
    this.clickCounter += 1;
  }

  setClasses() {
    const classes = {
      active: this.clickCounter > 4,
      notActive: this.clickCounter <= 4,
    };
    return classes;
  }

  addTodo(item: string) {
    this.todos.push(item);
    this.name = ""
  }
}
