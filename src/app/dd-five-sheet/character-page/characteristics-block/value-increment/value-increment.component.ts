import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Characteristic } from 'src/app/dd-five-sheet/shared-objects/characteristics/characteristics';

@Component({
  selector: 'dd-value-increment',
  templateUrl: './value-increment.component.html',
})
export class ValueIncrementComponent implements OnInit {

  @Input() characteristic: Characteristic;


  maxValue = false;
  minValue= false;
  constructor() { }



  ngOnInit() {
  }

  increase () {
    this.minValue = false;
    this.characteristic.setValue(this.characteristic.getValue() + 1);
    if (this.characteristic.getValue() === 30) {
      this.maxValue = true;
    }
  }
  decrease () {
    this.maxValue = false;
    this.characteristic.setValue(this.characteristic.getValue() - 1);
    if (this.characteristic.getValue() === 0) {
      this.minValue = true;
    }
  }
}
