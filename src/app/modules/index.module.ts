import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexLayoutComponent } from './index.component';
import { AppModuleRoutingModule } from './index.routing';
import { ESharedModule } from '../shared/sharedmodule';
import { MatTabsModule } from '@angular/material/tabs'
import { JTMVComponent } from './jtmv/jtmv.comp';
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { LBComponent } from './leaderboard/lb.comp';
import { MatListModule } from '@angular/material/list'
import { DPComponent } from './donorprofile/dp.comp';
import { VJFRMComponent } from './vjfrm/vjfrm.comp';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DLComponent } from './donorlist/dl.comp';
import { DistributeOrderComponent } from "./distributeorderlist/distributeorderlist.comp";

@NgModule({
  imports: [
    CommonModule,
    AppModuleRoutingModule,
    ESharedModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatListModule,
    MatSidenavModule
  ],
  declarations: [IndexLayoutComponent, JTMVComponent, LBComponent, DPComponent,VJFRMComponent,DLComponent,DistributeOrderComponent]
})
export class IndexModule { }
