import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
// RxJS v6+
import { timer, Subscription } from 'rxjs';
import { WebinarService } from '../webinar.service';
@Component({
  selector: 'gonature-workshop-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit,OnDestroy {

  title?:any;
  webinar:IWEBINAR;
  counter?:ICOUNTER;
  constants?:ICONSTANTS;
  source = timer(100,100);
  schedule:Date = new Date();
  loaded:boolean;
  subscription = new Subscription();
  constructor(private db: AngularFirestore,private w:WebinarService){}

  ngOnInit(){
    const subsciption = this.db.collection('config').valueChanges().subscribe((webinars:IWEBINAR[]) => {
      this.webinar = webinars[1];
      this.w.webinar = this.webinar;
      this.constants = {
        day      : 1000 * 60 * 60 * 24,
        minute   : 1000 * 60,
        hour     : 1000 * 60 * 60,
        second   : 1000,
      }
      this.schedule = new Date(`${this.webinar.date} ${this.webinar.time}`);
      let webinar_date = `${this.webinar.date} ${this.webinar.time}`;
      this.constants.countDown = new Date(webinar_date).getTime();
      this.source.subscribe((val:any) => {
        let now = new Date().getTime();
        let distance = this.constants.countDown - now;
        this.counter = {
          days      : Math.floor(distance / (this.constants.day)),
          minutes   : Math.floor((distance % (this.constants.hour)) / (this.constants.minute)),
          hours     : Math.floor((distance % (this.constants.day)) / (this.constants.hour)),
          seconds   : Math.floor((distance % (this.constants.minute)) / this.constants.second)}
      });
      this.loaded = true;
    });
    this.subscription.add(subsciption);


  }
  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }

}
interface IWEBINAR {
  webinar_id:string,
  name:string,
  date:string,
  time:string,
  id?:string
}
interface ICOUNTER {
  days:number,
  hours:number,
  minutes:number,
  seconds:number,
}
interface ICONSTANTS {
  day:number,
  hour:number,
  minute:number,
  second:number,
  countDown?:number
}
