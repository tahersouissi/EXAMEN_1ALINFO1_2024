import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>('http://localhost:3000/products')
  }
}
