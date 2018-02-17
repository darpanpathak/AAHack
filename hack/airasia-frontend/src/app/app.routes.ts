import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/auth.guard';

import { AppRoutesComponent } from './components/app-routes/app-routes.component';
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
    {
      path: 'account',
      children: [
        { path: '', redirectTo: 'signin', pathMatch: 'full' },
        { path: 'signin', component: LoginComponent },
      ]
    },
    {
      path: 'app',
      component: AppRoutesComponent,
      children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component:HomeComponent, canActivate: [AuthGuard] },
      ]
    },
    { path: '', redirectTo: 'app', pathMatch: 'full' }
  ]
  
  @NgModule({
    imports: [RouterModule.forRoot(routes, {
      useHash: false
    })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }