import { Component, OnInit } from '@angular/core';
import { Project } from '../modules/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
productsList! : Project [];
  ngOnInit(): void {

  }
}
