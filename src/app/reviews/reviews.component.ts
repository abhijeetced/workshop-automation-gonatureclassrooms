import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gonature-workshop-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews:IREVIEW[] = [
    {
      thumbnail:"",
      url:"https://www.youtube.com/embed/i-84Ypj-N4I",
      title:"Nidhi Reversed Hypertension & Nose Bleeding (Trailer)"
    },
    {
      thumbnail:"",
      url:"https://www.youtube.com/embed/i-84Ypj-N4I",
      title:"Nidhi Reversed Hypertension & Nose Bleeding (Trailer)"
    },
    {
      thumbnail:"",
      url:"https://www.youtube.com/embed/i-84Ypj-N4I",
      title:"Nidhi Reversed Hypertension & Nose Bleeding (Trailer)"
    },
    {
      thumbnail:"",
      url:"https://www.youtube.com/embed/i-84Ypj-N4I",
      title:"Nidhi Reversed Hypertension & Nose Bleeding (Trailer)"
    },
    {
      thumbnail:"",
      url:"https://www.youtube.com/embed/i-84Ypj-N4I",
      title:"Nidhi Reversed Hypertension & Nose Bleeding (Trailer)"
    },
    {
      thumbnail:"",
      url:"https://www.youtube.com/embed/i-84Ypj-N4I",
      title:"Nidhi Reversed Hypertension & Nose Bleeding (Trailer)"
    },
    {
      thumbnail:"",
      url:"https://www.youtube.com/embed/i-84Ypj-N4I",
      title:"Nidhi Reversed Hypertension & Nose Bleeding (Trailer)"
    },
    {
      thumbnail:"",
      url:"https://www.youtube.com/embed/i-84Ypj-N4I",
      title:"Nidhi Reversed Hypertension & Nose Bleeding (Trailer)"
    }
  ];

  constructor() { }

  ngOnInit(): void {



  }

}
interface IREVIEW {
  thumbnail:string,
  url:string,
  title:string
}

