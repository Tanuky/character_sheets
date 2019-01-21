import { Component, OnInit } from '@angular/core';
import { CharacteristicsService } from '../shared-objects/characteristics/characteristics.service';
import { Characteristic } from '../shared-objects/characteristics/characteristics';


@Component({
  selector: 'dd-character-page',
  templateUrl: './character-page.component.html',
})
export class CharacterPageComponent implements OnInit {
  public characteristics: Characteristic[];
  constructor(private characteristicsService: CharacteristicsService) {
    this.characteristics = this.characteristicsService.getCharacterisitics();

  }

  ngOnInit() {
    console.log(this.characteristics);
  }

}
