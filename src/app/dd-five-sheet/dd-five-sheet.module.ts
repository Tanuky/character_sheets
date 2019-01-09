import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdFiveSheetComponent } from './dd-five-sheet.component';
import { SharedObjectsModule } from './shared-objects/shared-objects.module'
import { CharacterPageComponent } from './character-page/character-page.component';
import { CharacteristicsBlockComponent } from './character-page/characteristics-block/characteristics-block.component';
import { CharacteristicDisplayComponent } from './character-page/characteristics-block/characteristic-display/characteristic-display.component';
 


@NgModule({
  imports: [
    CommonModule,
    SharedObjectsModule
  ],
  declarations: [    DdFiveSheetComponent,
    CharacterPageComponent,
    CharacteristicsBlockComponent,
    CharacteristicDisplayComponent,
  ],
  exports: [DdFiveSheetComponent]
})
export class DdFiveSheetModule { }
