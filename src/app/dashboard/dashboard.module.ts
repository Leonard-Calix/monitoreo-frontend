import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LbdModule } from '../lbd/lbd.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { DepartmentComponent } from '../pages/department/department.component';
import { MunicipalitiesComponent } from '../pages/municipalities/municipalities.component';
import { UsersComponent } from '../pages/users/users.component';
import { RolesComponent } from '../pages/roles/roles.component';
import { CommunitiesComponent } from '../pages/communities/communities.component';
import { MonitoringComponent } from '../pages/monitoring/monitoring.component';
import { MaintenanceComponent } from '../pages/maintenance/maintenance.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DashboardRoutes),
        FormsModule,
        LbdModule
    ],
    declarations: [DashboardComponent, DepartmentComponent, MunicipalitiesComponent, UsersComponent, RolesComponent, CommunitiesComponent, MonitoringComponent, MaintenanceComponent]
})

export class DashboardModule {}