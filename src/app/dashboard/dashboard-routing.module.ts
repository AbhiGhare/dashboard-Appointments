import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComComponent } from './dashboard-com/dashboard-com.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
