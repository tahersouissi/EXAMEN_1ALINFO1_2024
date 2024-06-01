import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceExamService {


  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:3000';
  getArtists() {
    return this.http.get(this.apiUrl + '/Artist')
  }

  getReservations() {
    return this.http.get(this.apiUrl + '/Reservation')
  }

  getShows() {
    return this.http.get(this.apiUrl + '/Show')
  }
  // getProductById(num:number) {
  //   return this.http.get('http://localhost:3000/projects/'+num)
  // }


  addShow(data: any): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(this.apiUrl + '/Show', data, httpOptions)
  }

  addReservation(data: any): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(this.apiUrl + '/Show', data, httpOptions)
  }


}
