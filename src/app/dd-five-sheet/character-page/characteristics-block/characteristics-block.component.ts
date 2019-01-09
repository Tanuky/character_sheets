import { Component, OnInit, Input } from '@angular/core';
import { Characteristic } from '../../shared-objects/characteristics/characteristics';

@Component({
  selector: 'dd-characteristics-block',
  templateUrl: './characteristics-block.component.html',
  styleUrls: ['./characteristics-block.component.css']
})
export class CharacteristicsBlockComponent implements OnInit {

  @Input() characteristics: Characteristic[];

  constructor() { }

  ngOnInit() {
  }

}
