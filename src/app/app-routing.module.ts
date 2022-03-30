import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,canActivate:[RouteGuard]},
  {path: '', redirectTo: 'login',pathMatch: 'full'},
  { path:'login', component:LoginpageComponent},
  { path:'dashboard', component:DashboardComponent,canActivate:[RouteGuard]},
  { path:'home', component:HomeComponent,canActivate:[RouteGuard]},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
