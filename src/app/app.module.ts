import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { PagesnavbarModule } from './shared/pagesnavbar/pagesnavbar.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AppRoutes } from './app.routing';
import { AuthService } from './services/auth.service';
import { MunicipalitiesService } from './services/municipalities.service';
import { DepartmentService } from './services/department.service';
import { CommunitiesService } from './services/communities.service';
import { HttpClientModule } from '@angular/common/http';
import { PollService } from './services/poll.service';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        RouterModule.forRoot(AppRoutes, {
            useHash: true
        }),
        SidebarModule,
        NavbarModule,
        FooterModule,
        FixedPluginModule,
        PagesnavbarModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        AuthService,
        MunicipalitiesService,
        DepartmentService,
        CommunitiesService,
        PollService
    ]
})

export class AppModule { }
