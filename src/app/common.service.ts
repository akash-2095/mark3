import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: Http) { }
  GetUser(){
    return this.http.get('http://localhost:8080/api/getUser/').pipe(map((response: Response) => response.json()));     
  }
}
