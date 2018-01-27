import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ContractsComponent } from './components/contracts/contracts.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { AddContractComponent } from './components/contracts/add-contract/add-contract.component';
import { ShowReservationComponent } from './components/reservation/show-reservation/show-reservation.component';

import { ContractService } from './services/contract.service';
import { SearchService } from './services/search.service';
import { ReservationService } from './services/reservation.service';
import { HotelService } from './services/hotel.service';
import { RoomTypeService } from './services/room-type.service';
import { CountryService } from './services/country.service';

import { AppRoutingModule } from './app-routing.module';
import {RoomTypeFilterPipe} from './filters/RoomTypeFilter.pipe';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CdkTableModule } from '@angular/cdk/table';


import { MatAutocompleteModule,
          MatButtonModule,
          MatButtonToggleModule,
          MatCardModule,
          MatCheckboxModule,
          MatChipsModule,
          MatDatepickerModule,
          MatDialogModule,
          MatExpansionModule,
          MatGridListModule,
          MatIconModule,
          MatInputModule,
          MatListModule,
          MatMenuModule,
          MatNativeDateModule,
          MatPaginatorModule,
          MatProgressBarModule,
          MatProgressSpinnerModule,
          MatRadioModule,
          MatRippleModule,
          MatSelectModule,
          MatSidenavModule,
          MatSliderModule,
          MatSlideToggleModule,
          MatSnackBarModule,
          MatSortModule,
          MatTableModule,
          MatTabsModule,
          MatToolbarModule,
          MatTooltipModule,
          MatStepperModule } from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { ShowContractComponent } from './components/contracts/show-contract/show-contract.component';
import { AllReservationsComponent } from './components/reservation/all-reservations/all-reservations.component';


@NgModule({
  declarations: [
    AppComponent,
    ContractsComponent,
    HomeComponent,
    PageNotFoundComponent,
    ReservationComponent,
    AddContractComponent,
    ShowReservationComponent,
    RoomTypeFilterPipe,
    ShowContractComponent,
    AllReservationsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  providers: [ContractService, SearchService, ReservationService, HotelService, RoomTypeService, CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
