import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients/patients.component';

// import { CalendarModule, DateAdapter } from 'angular-calendar';

@NgModule({
  declarations: [
    PatientsComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    // CalendarModule
  ]
})
export class PatientsModule { }
