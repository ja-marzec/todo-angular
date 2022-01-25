import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "list", component: ListComponent},
  {path: "character", component: CharacterComponent},
  {path: "todos", component: TodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
