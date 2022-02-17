import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  endpoint: string='https://yesno.wtf/api';
  constructor(private http: HttpClient) { 

  }
  getData(url: string){

    return this.http.get(this.endpoint+url);
  }
}
