import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _url = 'assets/mock-data.json';
  private catdata = 'assets/categories.json';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this._url);
  }

  getCategory(): Observable<any[]> {
    return this.http.get<any[]>(this.catdata);
  }
}
