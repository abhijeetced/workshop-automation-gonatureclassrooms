import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { of as observableOf } from 'rxjs';
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

@Component({
  selector: 'gonature-workshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showFiller = false;
  @ViewChild("drawer") drawer:MatSidenav;
  constructor(public platform: Platform,private webinbar:WebinarService){}


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
    this.webinbar.toggled.subscribe(()=>{
      this.drawer.toggle();
    });
  }
}


