import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'gonature-workshop-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: any[] = [
    {
      thumbnail:"assets/images/thumbnails/T1.png",
      url:"https://www.youtube.com/embed/i-84Ypj-N4I",
      title:"Nidhi Reversed Hypertension & Nose Bleeding (Trailer)"
    },
    {
      thumbnail:"assets/images/thumbnails/T2.png",
      url:"https://www.youtube.com/embed/llOLlRX22Jo",
      title:"Harpreet Reversed Her 11 Years PCOD Problem (Trailer)"
    },
    {
      thumbnail:"assets/images/thumbnails/T3.png",
      url:"https://www.youtube.com/embed/XU3mtqrex48",
      title:"Kavita Reversed Her 5 Years Old Depression (Trailer)"
    },
    {
      thumbnail:"assets/images/thumbnails/T4.png",
      url:"https://www.youtube.com/embed/M3rBVugrBy8",
      title:"Varun Bhargava Reversed His 25 Years Old Diabetes (Trailer)"
    },
    {
      thumbnail:"assets/images/thumbnails/T5.png",
      url:"https://www.youtube.com/embed/nlkZPVP-OY0",
      title:"Dipak Reversed 9 Years Old Diabetes (Trailer)"
    },
    {
      thumbnail:"assets/images/thumbnails/T6.png",
      url:"https://www.youtube.com/embed/MW2_55Fx5eU",
      title:"Satish Kumar Reversed His 20 Years Old Constipation (Trailer)"
    },

  ];

  constructor(public sanitizer: DomSanitizer)   { }

  ngOnInit(): void {



  }

}


