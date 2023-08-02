import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComComponent } from './dashboard-com/dashboard-com.component';
// import { ChartModule } from '@syncfusion/ej2-angular-charts';
// import { LineSeriesService, CategoryService} from '@syncfusion/ej2-ng-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms';
// import { HeaderComponent } from '../header/header.component';
@NgModule({
  declarations: [
    DashboardComComponent,
    // HeaderComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    // ChartModule
    NgApexchartsModule
  ],
  // providers: [ LineSeriesService, CategoryService],

})
export class DashboardModule { }
