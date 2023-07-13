import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployessComponent } from './employess/employess.component';
import { MainComponent } from './main/main.component';
import { DepartmentComponent } from './department/department.component';
import { TaskComponent } from './task/task.component';
import { SalariesComponent } from './salaries/salaries.component';
import { ManagersComponent } from './managers/managers.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path:'', component:MainComponent,
  children:[
    { path:'', component: DashboardComponent},
    { path: 'dashboard/employee', component:EmployessComponent},
    { path: 'dashboard/departments', component:DepartmentComponent},
    { path: 'dashboard/task', component:TaskComponent},
    { path: 'dashboard/salaries', component:SalariesComponent},
    { path: 'dashboard/managers', component:ManagersComponent},
    { path: 'dashboard/status', component:StatusComponent},

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
