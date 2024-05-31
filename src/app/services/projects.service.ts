import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get('http://localhost:3000/projects')
  }



  addTasks(data:any){
    const signInBody = {
      id: 100,
      title: "tata",
    };
    return this.http.post('http://localhost:3000/task',signInBody)
  }
}
