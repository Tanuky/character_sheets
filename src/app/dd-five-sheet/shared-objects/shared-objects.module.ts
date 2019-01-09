import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacteristicsService } from './characteristics/characteristics.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SharedObjectsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedObjectsModule,
      providers: [ CharacteristicsService ]
    };
  }
 }
