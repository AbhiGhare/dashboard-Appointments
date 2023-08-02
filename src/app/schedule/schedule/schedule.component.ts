import { Component } from '@angular/core';
import {  PriorityData, Service, TypeData } from './../app.service';
// Appointment

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  providers: [Service],
})
export class ScheduleComponent {

  // appointmentsData: Appointment[];
  appointmentsData: any;


  currentDate: Date = new Date(2021, 2, 28);

  priorityData: PriorityData[];

  typeData: TypeData[];


  constructor(service: Service) {
    this.appointmentsData = service.getData();
    this.priorityData = service.getPriorityData();
    this.typeData = service.getTypeData();
  }
}
