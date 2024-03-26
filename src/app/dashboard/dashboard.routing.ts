import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DepartmentComponent } from 'app/pages/department/department.component';
import { MunicipalitiesComponent } from 'app/pages/municipalities/municipalities.component';
import { RolesComponent } from 'app/pages/roles/roles.component';
import { UsersComponent } from 'app/pages/users/users.component';
import { MonitoringComponent } from 'app/pages/monitoring/monitoring.component';
import { MaintenanceComponent } from 'app/pages/maintenance/maintenance.component';


export const DashboardRoutes: Routes = [{
    path: '',
    children: [
        {
            path: 'dashboard',
            component: DashboardComponent
        },
        {
            path: 'monitoring',
            component: MonitoringComponent
        },
        {
            path: 'maintenance',
            component: MaintenanceComponent
        },
        {
            path: 'department',
            component: DepartmentComponent
        },
        {
            path: 'municipalities',
            component: MunicipalitiesComponent
        },
        {
            path: 'users-list',
            component: UsersComponent
        },
        {
            path: 'roles',
            component: RolesComponent
        },
    ]
}];
