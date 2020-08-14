import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSaysAboutUsComponent } from './home-says-about-us.component';

describe('HomeSaysAboutUsComponent', () => {
  let component: HomeSaysAboutUsComponent;
  let fixture: ComponentFixture<HomeSaysAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSaysAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSaysAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
