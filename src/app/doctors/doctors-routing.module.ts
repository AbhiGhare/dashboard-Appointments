import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctComponent } from './doct/doct.component';

const routes: Routes = [
  {
    path:'',
    component:DoctComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsRoutingModule { }
