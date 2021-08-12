import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TrustpilotComponent } from './trustpilot.component';

describe('TrustpilotComponent', () => {
  let component: TrustpilotComponent;
  let fixture: ComponentFixture<TrustpilotComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TrustpilotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustpilotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
