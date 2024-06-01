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

  save(Reservvv: any) {
    const Reserv = {
      name: Reservvv.name,
      seats: Reservvv.date,
      showId: this.id,
    };

    this.ser.addReservation(Reserv).subscribe({
      next: (data) => {
        console.log("data" + data)
        this.router.navigate(['/show'])
      }

    });

  }

  id!: number;
  ngOnInit(): void {
    this.id = this.Act.snapshot.params['id']
    console.log(this.id)
  }

  Reservation = new FormGroup({
    seats: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    name: new FormControl('', [Validators.required,Validators.pattern('[0-9]{1}')]),
  })


}
