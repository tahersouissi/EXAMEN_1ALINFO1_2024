import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceExamService } from '../services/service-exam.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {

  constructor(private Act: ActivatedRoute, private ser: ServiceExamService, private router: Router) { }

  save() {
  }

  id!: number;
  ngOnInit(): void {
    this.id = this.Act.snapshot.params['id']
    console.log(this.id)
  }

  Reservation = new FormGroup({
    seats: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    name: new FormControl('', [Validators.required,]),
  })


}
