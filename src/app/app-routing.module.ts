import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { FriendsComponent } from './friends/friends.component';



const routes: Routes = [
{path:'test',component:TestComponent},
{path:'',component:LoginComponent},
{path:'dashboard',component:DashboardComponent, canActivate:[AuthGuard]},
{path:'login',component:LoginComponent},
{path:'logout',component:LogoutComponent},
{path:'friends',component:FriendsComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
   exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
