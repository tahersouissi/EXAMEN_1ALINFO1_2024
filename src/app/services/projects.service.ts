import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../modules/task';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('http://localhost:3000/projects')
  }
  getProductById(num:number) {
    return this.http.get('http://localhost:3000/projects/'+num)
  }


  addTasks(data: any) : Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post('http://localhost:3000/task', data,httpOptions)
  }


}
