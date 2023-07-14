import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentComponent } from './department/department.component';
import { DesignationComponent } from './designation/designation.component';
import { EmployessComponent } from './employess/employess.component';
import { MainComponent } from './main/main.component';
import { TaskComponent } from './task/task.component';
import { ManagersComponent } from './managers/managers.component';
import { SalariesComponent } from './salaries/salaries.component';
import { StatusComponent } from './status/status.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    DashboardComponent,
    DepartmentComponent,
    DesignationComponent,
    EmployessComponent,
    MainComponent,
    TaskComponent,
    ManagersComponent,
    SalariesComponent,
    StatusComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
  ]
})
export class LayoutModule { }
