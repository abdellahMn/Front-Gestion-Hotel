import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOurServecesComponent } from './home-our-serveces.component';

describe('HomeOurServecesComponent', () => {
  let component: HomeOurServecesComponent;
  let fixture: ComponentFixture<HomeOurServecesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOurServecesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOurServecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
