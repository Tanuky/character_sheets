import { Component, OnInit, Input } from '@angular/core';
import { Characteristic } from 'src/app/dd-five-sheet/shared-objects/characteristics/characteristics';

@Component({
  selector: 'dd-characteristic-display',
  templateUrl: './characteristic-display.component.html'
})
export class CharacteristicDisplayComponent implements OnInit {

  displayValue: Number;
  @Input() characteristic: Characteristic;


  constructor() { }

  ngOnInit() {
    this.displayValue = this.characteristic.getValue();
  }

  onChange (event) {
    let value =parseInt(event.target.value);
    this.characteristic.setValue(value)
  }
}
