import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuwahatiHomeComponent } from './guwahati-home/guwahati-home.component';

const routes: Routes = [
  { path: '', component: GuwahatiHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuwahatiRoutingModule { }
