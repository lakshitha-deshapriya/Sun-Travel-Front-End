import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ContractsComponent} from './components/contracts/contracts.component';
import {HomeComponent} from './components/home/home.component';
import {ReservationComponent} from './components/reservation/reservation.component';
import {AddContractComponent} from './components/contracts/add-contract/add-contract.component';
import {ShowReservationComponent} from './components/reservation/show-reservation/show-reservation.component';
import {AllReservationsComponent} from "./components/reservation/all-reservations/all-reservations.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contracts', component: ContractsComponent},
  {path: 'reservation', component: ReservationComponent},
  {path: 'reservations', component: AllReservationsComponent},
  {path: 'showreservation', component: ShowReservationComponent},
  {path: 'addcontract', component: AddContractComponent},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
