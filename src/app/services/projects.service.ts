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
}
