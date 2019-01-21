import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueIncrementComponent } from './value-increment.component';

describe('ValueIncrementComponent', () => {
  let component: ValueIncrementComponent;
  let fixture: ComponentFixture<ValueIncrementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueIncrementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueIncrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
