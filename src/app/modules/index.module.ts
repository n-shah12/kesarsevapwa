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

@NgModule({
  imports: [
    CommonModule,
    AppModuleRoutingModule,
    ESharedModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatListModule
  ],
  declarations: [IndexLayoutComponent, JTMVComponent, LBComponent, DPComponent,VJFRMComponent]
})
export class IndexModule { }
