import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctComponent } from './doct/doct.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DoctComponent
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    HttpClientModule
  ]
})
export class DoctorsModule { }
