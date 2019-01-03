import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './index.comp';
import { CommonModule } from '@angular/common';
import { ESharedModule } from 'src/app/shared/sharedmodule';
import { AgmCoreModule } from '@agm/core';
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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDyMQKcezGs03uuOdzjO7nrp6XDEgCygCI'
    })
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
