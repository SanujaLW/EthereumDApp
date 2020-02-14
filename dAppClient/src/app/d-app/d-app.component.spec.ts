import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DAppComponent } from './d-app.component';

describe('DAppComponent', () => {
  let component: DAppComponent;
  let fixture: ComponentFixture<DAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
