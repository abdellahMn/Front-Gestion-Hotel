import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLuxuryRoomComponent } from './home-luxury-room.component';

describe('HomeLuxuryRoomComponent', () => {
  let component: HomeLuxuryRoomComponent;
  let fixture: ComponentFixture<HomeLuxuryRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLuxuryRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLuxuryRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
