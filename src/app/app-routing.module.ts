import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComp } from './login/login.comp';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'login', component: LoginComp },
  { path: '', loadChildren: './modules/index.module#IndexModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
