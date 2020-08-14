import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeReservationComponent } from './home-reservation.component';

describe('HomeReservationComponent', () => {
  let component: HomeReservationComponent;
  let fixture: ComponentFixture<HomeReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
