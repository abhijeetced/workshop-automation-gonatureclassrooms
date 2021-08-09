import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { of as observableOf } from 'rxjs';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'gonature-workshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private db: AngularFirestore){}
  

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

  }
}


