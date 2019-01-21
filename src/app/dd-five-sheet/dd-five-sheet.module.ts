import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdFiveSheetComponent } from './dd-five-sheet.component';
import { SharedObjectsModule } from './shared-objects/shared-objects.module';
import { CharacterPageComponent } from './character-page/character-page.component';
import { CharacteristicsBlockComponent } from './character-page/characteristics-block/characteristics-block.component';
import { CharacteristicDisplayComponent } from './character-page/characteristics-block/characteristic-display/characteristic-display.component';
import { ValueIncrementComponent } from './character-page/characteristics-block/value-increment/value-increment.component';




@NgModule({
  imports: [
    CommonModule,
    SharedObjectsModule
  ],
  declarations: [DdFiveSheetComponent,
    CharacterPageComponent,
    CharacteristicsBlockComponent,
    CharacteristicDisplayComponent,
    ValueIncrementComponent,
  ],
  exports: [DdFiveSheetComponent]
})
export class DdFiveSheetModule { }
