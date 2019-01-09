import { Injectable } from '@angular/core';

import { CHARLIST } from './mock-characterisitics'

@Injectable({
  providedIn: 'root'
})
export class CharacteristicsService {

  constructor() { }

  getCharacterisitics () {
    return CHARLIST;
  }
}
