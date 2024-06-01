import { Artist } from './../models/artist';
import { ServiceExamService } from './../services/service-exam.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-artists',
  templateUrl: './list-artists.component.html',
  styleUrls: ['./list-artists.component.css']
})
export class ListArtistsComponent implements OnInit {

  constructor(private serv: ServiceExamService) { }


  artits!: Artist[];

  ngOnInit(): void {

    this.serv.getArtists().subscribe({
      next: (data) => this.artits = data as Artist[],
      error(err) {
        console.log(err);

      },
    })
  }


}
