import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { ProjectsComponent } from './projects/projects.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddTaskComponent } from './add-task/add-task.component';

const routes: Routes = [
  {path:'' , redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component : LoginComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'addtask/:id' , component : AddTaskComponent},

  { path: 'projects', component: ProjectsComponent },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
