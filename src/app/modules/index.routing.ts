import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexLayoutComponent } from './index.component';
import { JTMVComponent } from './jtmv/jtmv.comp';
import { LBComponent } from './leaderboard/lb.comp';
import { DPComponent } from './donorprofile/dp.comp';
import { VJFRMComponent } from './vjfrm/vjfrm.comp';
import { DLComponent } from './donorlist/dl.comp';
import {  DistributeOrderComponent } from './distributeorderlist/distributeorderlist.comp';

export const routes: Routes = [

    {
        path: '',
        component: IndexLayoutComponent,

        children: [
            {
                path: '',
                children: [
                    {
                        path: 'home', loadChildren: './dashboard/index.module#DashboardModule',
                    },
                    {
                        path: 'jtmv', component: JTMVComponent
                    },
                    {
                        path: 'leaderboard', component: LBComponent
                    },
                    {
                        path: 'dp', component: DPComponent
                    },
                    {
                        path: 'vjfrm', component: VJFRMComponent
                    },
                    {
                        path: 'donorlist', component: DLComponent
                    },{
                        path: 'orderlist', component: DistributeOrderComponent
                    },
                    {
                        path: 'volunteer', loadChildren: './volunteer/index.module#VolunteerModule',
                    },
                    {
                        path: '', redirectTo:'home'
                    }
                ]
            }
        ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppModuleRoutingModule { }
