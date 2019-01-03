import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


import { LoginComp } from './login/login.comp';
import { ESharedModule } from './shared/sharedmodule';
import { SignUpComponent } from './signup/signup.comp';

@NgModule({
  declarations: [
    AppComponent,
    LoginComp,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ESharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
