import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'; //Routes library here must be imported here
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
// import { CommonModule } from '@angular/common';

//here we add the routes
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent},
  { path: "dashboard", component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent }
]
@NgModule({
  imports: [
    // CommonModule //and delete de CommonModule
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
  //, declarations: [] // by AngularJs: you generally don't declare components in a routing module so you can delete the @NgModule.declarations
})
export class AppRoutingModule { }
