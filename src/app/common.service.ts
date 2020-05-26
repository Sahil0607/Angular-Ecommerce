import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  private category = new BehaviorSubject('Phones');
  categoryValue = this.category.asObservable();

  private query = new BehaviorSubject('');
  queryValue = this.query.asObservable();

  setCategory(category) {
    this.category.next(category);
  }
  setQuery(query) {
    this.query.next(query);
  }
}
