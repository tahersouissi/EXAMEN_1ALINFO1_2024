import { ServiceExamService } from './../services/service-exam.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.css']
})
export class AddShowComponent implements OnInit {

  id!: number;



  constructor(private Act: ActivatedRoute, private ser: ServiceExamService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.Act.snapshot.params['id']
    console.log(this.id)
  }
  // product!: Project;
  // ngOnInit() {
  //   this.id = this.Act.snapshot.params['id']
  //   console.log(this.id)
  //   this.ser.getProductById(this.id).subscribe({
  //     next: (data) => this.product = data as Project
  //   })
  // this.listAppartmentsFiltered = this.listApartments.filter((a) => a.residence.id == this.id);
  // console.log(this.listAppartmentsFiltered)


  Show = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    location: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    date: new FormControl('', Validators.required),
  })



  // save(){
  //   this.ps.addProduct(this.Task.value as any)
  // }

  save(Show: any) {
    const Taskk = {
      title: Show.title,
      date: Show.date,
      location: Show.location,
      artistId: this.id,
    };

    this.ser.addShow(Taskk).subscribe({
      next: (data) => {
        console.log("data" + data)
        this.router.navigate(['/show'])
      }

    });

  }


}

