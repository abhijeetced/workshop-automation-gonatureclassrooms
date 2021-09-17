import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebinarService {
  webinar:any;
  toggleSubject = new Subject();
  toggled = this.toggleSubject.asObservable();
  constructor() { }
  toggle(v:boolean){
    this.toggleSubject.next(v);
  }

}
