import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerMobileComponent } from './banner-mobile.component';

describe('BannerMobileComponent', () => {
  let component: BannerMobileComponent;
  let fixture: ComponentFixture<BannerMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
