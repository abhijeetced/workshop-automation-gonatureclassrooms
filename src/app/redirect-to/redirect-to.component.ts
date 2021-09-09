import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gonature-workshop-redirect-to',
  templateUrl: './redirect-to.component.html',
  styleUrls: ['./redirect-to.component.css']
})
export class RedirectToComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
  }

}
