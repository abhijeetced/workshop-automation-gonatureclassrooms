import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'gonature-workshop-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input("review") review:any;
  constructor(public sanitizer: DomSanitizer)  {

  }

  ngOnInit(): void {
    this.review.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.review.url)
  }

}
