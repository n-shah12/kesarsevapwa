import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { VDashComponent } from './index.comp';
import { CommonModule } from '@angular/common';
import { ESharedModule } from 'src/app/shared/sharedmodule';
import { DonateComponent } from './donate/donate.comp';
export const routes: Routes = [

  {
    path: '',
    component: VDashComponent,
  }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    ESharedModule
  ],
    
  declarations: [VDashComponent, DonateComponent]
})
export class VDashboardModule { }
