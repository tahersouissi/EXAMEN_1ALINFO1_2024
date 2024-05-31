import { Task } from './../modules/task';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../modules/project';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  constructor(private Act: ActivatedRoute, private ser: ProjectsService,private router : Router) { }
  id!: number;
  product! : Project ;
  ngOnInit() {
    this.id = this.Act.snapshot.params['id']
    console.log(this.id)
    this.ser.getProductById(this.id).subscribe({
      next: (data) => this.product = data as Project
    })
    // this.listAppartmentsFiltered = this.listApartments.filter((a) => a.residence.id == this.id);
    // console.log(this.listAppartmentsFiltered)

  }

  Task = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(6)]),
    dateD: new FormControl('', Validators.required),
    dateF: new FormControl('', Validators.required),
  })
  // save(){
  //   this.ps.addProduct(this.Task.value as any)
  // }

  save(Task : any) {
    const Taskk = {
      title: Task.title,
      dateD: Task.dateD,
      dateF: Task.dateF,
      status: "To Do",
      project: this.product
    };
    this.ser.addTasks(Taskk).subscribe({
      next: (data) => {console.log("data" + data)
        this.router.navigate(['/login'])
      }

    });

  }
}
