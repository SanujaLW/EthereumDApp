import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberGetSetComponent } from './number-get-set.component';

describe('NumberGetSetComponent', () => {
  let component: NumberGetSetComponent;
  let fixture: ComponentFixture<NumberGetSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberGetSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberGetSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
