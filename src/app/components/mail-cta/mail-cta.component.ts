import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { WebinarService } from '../../webinar.service';
import { MatDialog } from '@angular/material/dialog';
import { LeadformdialogComponent } from './leadformdialog/leadformdialog.component';
window as any;
@Component({
  selector: 'gonature-workshop-mail-cta',
  templateUrl: './mail-cta.component.html',
  styleUrls: ['./mail-cta.component.css']
})
export class MailCtaComponent implements OnInit {
  @Input('surface') surface:string
  @Input('title') title:string
  constructor(public dialog: MatDialog,private db: AngularFirestore,private webinar:WebinarService) {

  }

  openDialog() {
    const dialogRef = this.dialog.open(LeadformdialogComponent,{
      width: '550px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {}

  view(){
    this.webinar.toggle();
  }

}
