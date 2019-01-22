import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComp } from './login/login.comp';
import { AppComponent } from './app.component';
import { SignUpComponent } from './signup/signup.comp';
import { ChangePasswordComponent } from "./Changepassword/changepassword.comp";
import {  ForgetPasswordComponent } from "./forgetpassword/forgetpassword.comp";
const routes: Routes = [
  { path: 'login', component: LoginComp },
  { path: 'signup', component: SignUpComponent },
  // { path: 'changepassword', component: ChangePasswordComponent },
  // { path: 'forgetpassword', component: ForgetPasswordComponent },
  { path: '', loadChildren: './modules/index.module#IndexModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
