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
import { DistributeOrderListComponent } from "./distributeorderlist/distributeorderlist.comp";
import { DistributeOrderComponent } from "./distributeorder/distributeorder.comp";
import { AboutusComponent } from "./aboutus/aboutus.comp";
import { StateComponent } from "./states/states.comp";
import { PledgeComponent } from "./pledge/pledge.comp";
import { InspirationComponent } from "./inspiration/inspiration.comp";
import { InviteComponent } from "./invite/invite.comp";
import { ChangePasswordComponent } from "../Changepassword/changepassword.comp";
import { ForgetPasswordComponent } from "../forgetpassword/forgetpassword.comp";
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
  declarations: [IndexLayoutComponent, JTMVComponent, LBComponent,
     DPComponent,VJFRMComponent,DLComponent,DistributeOrderListComponent,
     DistributeOrderComponent,AboutusComponent,StateComponent,
     PledgeComponent,InspirationComponent,InviteComponent,ChangePasswordComponent,ForgetPasswordComponent]
})
export class IndexModule { }
