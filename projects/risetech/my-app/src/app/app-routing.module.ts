import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';


const routes: Routes = [
  {
    path: "",
    component: TodosComponent,
    // children: [{ path: "MovieDetailsComponent", component: MovieDetailsComponent }]
  },
  { path: "MovieDetailsComponent", component: MovieDetailsComponent,  },
  { path: "**", redirectTo: "notfound" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
