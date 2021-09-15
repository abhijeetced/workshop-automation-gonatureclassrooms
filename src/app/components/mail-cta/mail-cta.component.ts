import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { WebinarService } from '../../webinar.service';
window as any;
@Component({
  selector: 'gonature-workshop-mail-cta',
  templateUrl: './mail-cta.component.html',
  styleUrls: ['./mail-cta.component.css']
})
export class MailCtaComponent implements OnInit {
  constructor(private db: AngularFirestore,private webinar:WebinarService) {

  }

  ngOnInit(): void {}

  view(){
    this.webinar.toggle();
  }

}
