import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { of as observableOf } from 'rxjs';
@Component({
  selector: 'gonature-workshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private db: AngularFirestore){}

  ngOnInit(){

  }
}


