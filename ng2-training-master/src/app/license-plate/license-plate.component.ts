import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LicensePlate} from '../license-plate';
import { CurrencySwicherService } from '../currency-swicher.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-license-plate',
  templateUrl: './license-plate.component.html',
  styleUrls: ['./license-plate.component.css']
})
export class LicensePlateComponent {

  @Input()
  plate: LicensePlate;

  @Input()
  buttonText: string;

  @Output()
  onAddToCart = new EventEmitter<LicensePlate>();

  selectedCurrency: string;

  showPopup: false;

  constructor(public currencySwicher: CurrencySwicherService) {
  }

  addToCart() {
    this.onAddToCart.emit(this.plate);
  }
}
