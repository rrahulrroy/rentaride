import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuwahatiRoutingModule } from './guwahati-routing.module';
import { GuwahatiHomeComponent } from './guwahati-home/guwahati-home.component';


@NgModule({
  declarations: [
    GuwahatiHomeComponent
  ],
  imports: [
    CommonModule,
    GuwahatiRoutingModule
  ]
})
export class GuwahatiModule { }
