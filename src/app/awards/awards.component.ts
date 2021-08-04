import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'gonature-workshop-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {

  slidesStore = [
    {id:"1",alt:"1",title:"Image 01",src:"assets/images/gonature_award_one.jpg"},
    {id:"2",alt:"1",title:"Image 01",src:"assets/images/gonature_award_two.jpg"},
    {id:"3",alt:"1",title:"Image 01",src:"assets/images/gonature_award_three.jpg"},
    {id:"4",alt:"1",title:"Image 01",src:"assets/images/gonature_award_four.jpg"},
    {id:"5",alt:"1",title:"Image 01",src:"assets/images/gonature_award_one.jpg"},
    {id:"6",alt:"1",title:"Image 01",src:"assets/images/gonature_award_two.jpg"},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
