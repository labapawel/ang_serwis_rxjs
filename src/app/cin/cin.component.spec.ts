import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinComponent } from './cin.component';

describe('CinComponent', () => {
  let component: CinComponent;
  let fixture: ComponentFixture<CinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
