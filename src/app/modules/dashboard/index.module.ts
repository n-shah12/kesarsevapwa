import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './index.comp';
import { CommonModule } from '@angular/common';
import { ESharedModule } from 'src/app/shared/sharedmodule';
import { AgmCoreModule } from '@agm/core';
import { DonateDialogComponent } from './donate/donate.comp';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { environment } from 'src/environments/environment.prod';
import { OrderNwDialogComponent } from './ordernow/ord.comp';
export const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
  }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    ESharedModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey:  environment.mapkey,
      libraries: ["places"]
    })
  ],
  declarations: [DashboardComponent, DonateDialogComponent, OrderNwDialogComponent],
  entryComponents: [DonateDialogComponent,OrderNwDialogComponent]

})
export class DashboardModule { }
