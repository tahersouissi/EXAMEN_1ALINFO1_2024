import { Component } from '@angular/core';
import { ServiceExamService } from '../services/service-exam.service';
import { Show } from '../models/show';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-list-shows',
  templateUrl: './list-shows.component.html',
  styleUrls: ['./list-shows.component.css']
})
export class ListShowsComponent {
  total: any;

  reserve() {
  }
  titleinput!: string;

  constructor(private serv: ServiceExamService) { }


  artits!: Show[];
  reservations!: Reservation[];

  ngOnInit(): void {

    this.serv.getShows().subscribe({
      next: (data) => this.artits = data as Show[],
      error(err) {
        console.log(err);

      },
    })

    this.serv.getReservations().subscribe({
      next: (data) => this.reservations = data as Reservation[],
      error(err) {
        console.log(err);

      },
    })

  }



}
