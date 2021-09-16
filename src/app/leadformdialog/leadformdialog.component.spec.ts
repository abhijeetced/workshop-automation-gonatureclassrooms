import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadformdialogComponent } from './leadformdialog.component';

describe('LeadformdialogComponent', () => {
  let component: LeadformdialogComponent;
  let fixture: ComponentFixture<LeadformdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadformdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadformdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
