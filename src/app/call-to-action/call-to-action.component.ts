import { Component, OnInit } from '@angular/core';
import { LeadformdialogComponent } from '../leadformdialog/leadformdialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'gonature-workshop-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.css']
})
export class CallToActionComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
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


}
