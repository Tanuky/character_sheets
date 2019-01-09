import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdFiveSheetComponent } from './dd-five-sheet.component';

describe('DdFiveSheetComponent', () => {
  let component: DdFiveSheetComponent;
  let fixture: ComponentFixture<DdFiveSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdFiveSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdFiveSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
