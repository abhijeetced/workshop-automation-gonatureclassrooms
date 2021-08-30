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
  waiting:boolean;
  form:FormGroup;
  constructor(private db: AngularFirestore,private fb:FormBuilder) {
    this.form = this.fb.group({
      mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(13)]],
      date  :[new Date()]
    });
  }

  ngOnInit(): void {}

  join(){
    this.waiting = true;
    this.db.collection('mobile_numbers').add(this.form.value).then((v)=>{
      window.location.href = "https://pages.razorpay.com/gdiet";
    });
  }

}
