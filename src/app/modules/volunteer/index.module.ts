import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';


export const routes: Routes = [

    {
        path: '',
        component: IndexComponent,

        children: [
            {
                path: '',
                children: [
                    {
                        path: '', loadChildren: './vdashboard/index.module#VDashboardModule',
                    }
                ]
            }
        ]
    }];

@NgModule({
    declarations: [IndexComponent],
    imports: [ CommonModule, RouterModule.forChild(routes) ],
    exports: [],
    providers: [],
})


export class VolunteerModule {}