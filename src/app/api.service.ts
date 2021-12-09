import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public url:string="https://eczaneleri.net/api/eczane-api?demo=1&type=json";

  constructor(private http:HttpClient) { }

  webService():Observable<any>{

    return this.http.get(this.url);
  }
}
