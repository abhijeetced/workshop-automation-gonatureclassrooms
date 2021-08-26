import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
window as any;
@Component({
  selector: 'gonature-workshop-mail-cta',
  templateUrl: './mail-cta.component.html',
  styleUrls: ['./mail-cta.component.css']
})
export class MailCtaComponent implements OnInit {
  mobile:string;
  waiting:boolean;
  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {}

  join(mobile:string){
    this.waiting = true;
    this.db.collection('mobile_numbers').add({mobile:mobile}).then((v)=>{
      window.location.href = "https://pages.razorpay.com/gdiet";
      this.waiting = false;
    });

  }

}
