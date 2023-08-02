import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
// import { SheduleComponent } from './shedule/shedule.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DxSchedulerModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    // SheduleComponent,
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    DxSchedulerModule,
  ],
  // providers:[]
})
export class ScheduleModule { }
