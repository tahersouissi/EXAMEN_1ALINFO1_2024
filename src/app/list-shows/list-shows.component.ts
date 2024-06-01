import { Component } from '@angular/core';
import { ServiceExamService } from '../services/service-exam.service';
import { Show } from '../models/show';

@Component({
  selector: 'app-list-shows',
  templateUrl: './list-shows.component.html',
  styleUrls: ['./list-shows.component.css']
})
export class ListShowsComponent {

  reserve() {
  }
  titleinput!: string;

  constructor(private serv: ServiceExamService) { }


  artits!: Show[];

  ngOnInit(): void {

    this.serv.getShows().subscribe({
      next: (data) => this.artits = data as Show[],
      error(err) {
        console.log(err);

      },
    })
  }



}
