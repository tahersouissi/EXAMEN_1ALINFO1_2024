import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  constructor(private Act:ActivatedRoute){}
  id!:number;
  ngOnInit(){
    this.id=this.Act.snapshot.params['id']
    console.log(this.id)
    // this.listAppartmentsFiltered = this.listApartments.filter((a) => a.residence.id == this.id);
    // console.log(this.listAppartmentsFiltered)

  }

  Task = new FormGroup({
    id : new FormControl('',Validators.required),
    title : new FormControl('',[Validators.required,Validators.minLength(6)]),
    price : new FormControl('',Validators.required),
    quantity : new FormControl('',Validators.required),
    like : new FormControl('',Validators.required),
  })
  // save(){
  //   this.ps.addProduct(this.Task.value as any)
  // }
}
