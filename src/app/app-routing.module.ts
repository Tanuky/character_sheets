import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DdFiveSheetComponent } from './dd-five-sheet/dd-five-sheet.component';


const routes: Routes = [
  { path: '', component: DdFiveSheetComponent },
  { path: 'dd5', component: DdFiveSheetComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
