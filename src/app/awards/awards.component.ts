import { Component, OnInit} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'gonature-workshop-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css'],
})


export class AwardsComponent implements OnInit  {

  slidesStore = [
    {id:"1",alt:"1",title:"Image 01",src:"assets/images/gonature_award_one.jpg"},
    {id:"2",alt:"1",title:"Image 01",src:"assets/images/gonature_award_two.jpg"},
    {id:"3",alt:"1",title:"Image 01",src:"assets/images/gonature_award_three.jpg"},
    {id:"4",alt:"1",title:"Image 01",src:"assets/images/gonature_award_four.jpg"},
  ]

  customOptions: OwlOptions = {
    loop: false,
    autoplay: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    items: 4,
    nav: true,
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 4,
      }
    }
  }
  
  constructor(
  ) {}

  ngOnInit() {
  }
}
