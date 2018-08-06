import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
{path:'test',component:TestComponent},
{path:'',component:LoginComponent}
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
