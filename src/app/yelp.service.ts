import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "Bearer JLNek-3gVC2m18T8KWrYgCA2etJuI5SFDkxYjNU6hr7xMIMT3H62s2zfjTEXB3YNmRZ8mDrtq6i6YAkJvtUg_WGRXDupO8vN7lsipV5qqey6zdGk5kMXLNVOVTDkXHYx"
  })
};

@Injectable({
  providedIn: 'root'
})

export class YelpserviceService {
  
    constructor(private http: HttpClient) { }
  
    getFoods(city, state, priceInfo) : Observable<any> {
      
      return this.http.get<any>(
        `http://localhost:3000/api/${city}/${state}/${priceInfo}`, httpOptions
      );
    }
}