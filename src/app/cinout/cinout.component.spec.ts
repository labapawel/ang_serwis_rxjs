import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinoutComponent } from './cinout.component';

describe('CinoutComponent', () => {
  let component: CinoutComponent;
  let fixture: ComponentFixture<CinoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
