import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ContractsComponent} from './components/contracts/contracts.component';
import {HomeComponent} from './components/home/home.component';
import {ReservationComponent} from "./components/reservation/reservation.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contracts', component: ContractsComponent},
  {path: 'reservation', component: ReservationComponent},
  {path: 'page-not-found', component: PageNotFoundComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
