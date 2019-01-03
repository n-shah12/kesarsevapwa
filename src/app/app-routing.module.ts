import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComp } from './login/login.comp';
import { AppComponent } from './app.component';
import { SignUpComponent } from './signup/signup.comp';

const routes: Routes = [
  { path: 'login', component: LoginComp },
  { path: 'signup', component: SignUpComponent },
  { path: '', loadChildren: './modules/index.module#IndexModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
