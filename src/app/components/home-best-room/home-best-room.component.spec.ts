import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBestRoomComponent } from './home-best-room.component';

describe('HomeBestRoomComponent', () => {
  let component: HomeBestRoomComponent;
  let fixture: ComponentFixture<HomeBestRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBestRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBestRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
