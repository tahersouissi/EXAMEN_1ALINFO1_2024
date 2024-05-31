import { Router } from '@angular/router';
import { ProjectsService } from './../services/projects.service';
import { Component, OnInit } from '@angular/core';
import { Project } from '../modules/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private pser: ProjectsService,private router :Router) { }
  productsList!: Project[];
  ngOnInit(): void {
    this.pser.getProducts().subscribe({
      next: (data) => this.productsList = data as Project[],
      error: (error) => console.log(error)

    })

  }



  addtask(x:number) {
    this.router.navigate(['/addtask/',x])
  }
}
