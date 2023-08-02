import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path:'dashboard',
    loadChildren:()=>import("./dashboard/dashboard.module").then(m=>m.DashboardModule)
  },
  {
    path:'schedule',
    loadChildren:()=>import("./schedule/schedule.module").then(m=>m.ScheduleModule)
  },
  {
    path:'doctor',
    loadChildren:()=>import("./doctors/doctors.module").then(m=>m.DoctorsModule)
  },
  {
    path:'patients',
    loadChildren:()=>import("./patients/patients.module").then(m=>m.PatientsModule)
  },
  {
    path:'preference',
    loadChildren:()=>import("./preference/preference.module").then(m=>m.PreferenceModule)
  },
  {
    path:'about',
    component:AboutComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
