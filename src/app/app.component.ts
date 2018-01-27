import {MediaMatcher} from '@angular/cdk/layout';
import { ChangeDetectorRef, Component} from '@angular/core';
import {ReservationService} from './services/reservation.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private reservationService: ReservationService, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  onClickReservations(){
    this.reservationService.availabilityObject = null;
    this.router.navigate(['/reservations']);
  }

}
