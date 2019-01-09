import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteristicDisplayComponent } from './characteristic-display.component';

describe('CharacteristicDisplayComponent', () => {
  let component: CharacteristicDisplayComponent;
  let fixture: ComponentFixture<CharacteristicDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacteristicDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacteristicDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
