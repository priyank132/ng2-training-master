import { Component, OnDestroy } from '@angular/core';
import {LicensePlate} from './license-plate';
import { CurrencyPipe } from '@angular/common';
import { LicensePlateServiceService } from './license-plate-service.service';
import { ISubscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [CurrencyPipe, LicensePlateServiceService]
})

export class AppComponent  {
}
