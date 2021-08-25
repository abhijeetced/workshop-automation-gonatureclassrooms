import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailCtaComponent } from './mail-cta.component';

describe('MailCtaComponent', () => {
  let component: MailCtaComponent;
  let fixture: ComponentFixture<MailCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailCtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
