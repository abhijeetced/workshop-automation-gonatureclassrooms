import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, of as observableOf, Subscription } from 'rxjs';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MailCtaComponent } from './components/mail-cta/mail-cta.component';
import { WebinarService } from './webinar.service';
import { MatSidenav } from '@angular/material/sidenav';
import {
  getSupportedInputTypes,
  Platform,
  supportsPassiveEventListeners,
  supportsScrollBehavior,
} from '@angular/cdk/platform';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import * as FullStory from '@fullstory/browser';
@Component({
  selector: 'gonature-workshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showFiller = false;
  @ViewChild("drawer") drawer:MatSidenav;
  @ViewChild("cta") cta:MailCtaComponent;
  popup = new BehaviorSubject(true);
  display = this.popup.asObservable();
  subscription = new Subscription();
  constructor(public platform: Platform,private webinbar:WebinarService)
  {
    FullStory.init({ orgId: '13H4YV', devMode: false });
  }


  clientslider: OwlOptions = {
    loop: true,
    autoplay: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    items: 3,
    nav: true,
    margin: 0,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
        nav: false

      },
      1000: {
        items: 3,
      }
    }
  }
  ngOnInit(){
    this.webinbar.toggled.subscribe((v)=>{
      if(v)
      {
        this.subscription.unsubscribe();
      }
      else
      {
        this.subscription.add(this.display.pipe(debounceTime(10*1000)).subscribe((v:any)=>{
          this.cta.openDialog();
        }));
      }
      this.popup.next(true);
    });
    this.subscription.add(this.display.pipe(debounceTime(30*1000)).subscribe((v:any)=>{
      this.cta.openDialog();
    }));
  }
}


