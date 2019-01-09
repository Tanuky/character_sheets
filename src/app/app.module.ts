import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DdFiveSheetModule } from './dd-five-sheet/dd-five-sheet.module';
import { AppRoutingModule } from './/app-routing.module';
import { SharedObjectsModule } from './dd-five-sheet/shared-objects/shared-objects.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DdFiveSheetModule,
    SharedObjectsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
