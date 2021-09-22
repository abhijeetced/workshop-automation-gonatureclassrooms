import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { WebinarService } from '../../webinar.service';
import { MatDialog } from '@angular/material/dialog';
import { LeadformdialogComponent } from './leadformdialog/leadformdialog.component';
import {
  getSupportedInputTypes,
  Platform,
  supportsPassiveEventListeners,
  supportsScrollBehavior,
} from '@angular/cdk/platform';
window as any;
@Component({
  selector: 'gonature-workshop-mail-cta',
  templateUrl: './mail-cta.component.html',
  styleUrls: ['./mail-cta.component.css']
})
export class MailCtaComponent implements OnInit {
  @Input('surface') surface:string;
  @Input('title') title:string;
  supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
  supportsPassiveEventListeners = supportsPassiveEventListeners();
  supportsScrollBehavior = supportsScrollBehavior();
  width:string = "550px";
  height:string = "auto";

  constructor(public dialog: MatDialog,private platform:Platform,private webinar:WebinarService) {

    if(this.platform.ANDROID)
    {
      this.width = "100vw";
      this.height = "auto";
    }

  }

  openDialog() {
    this.webinar.toggle(true);
    const dialogRef = this.dialog.open(LeadformdialogComponent,{
      "height": this.height,
      "width": this.width,
      data: {},
      panelClass: 'mailctadialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.webinar.toggle(false);
    });
  }

  ngOnInit(): void {

  }

  view(){
    this.webinar.toggle(true);
  }

}
