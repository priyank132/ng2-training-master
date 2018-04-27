import { Component, Output, EventEmitter } from '@angular/core';
import {Currency} from './currency';
import { CurrencySwicherService } from '../currency-swicher.service';

@Component({
  selector: 'app-currency-switcher',
  templateUrl: './currency-switcher.component.html',
  styleUrls: ['./currency-switcher.component.css']
})
export class CurrencySwitcherComponent {

  showItems = false;

  selectedCurrency: Currency = 'USD';

  constructor(private currencySwicher: CurrencySwicherService){
  }

  changeCurrency(currency: Currency) {
     this.selectedCurrency = currency;
     this.currencySwicher.changeCurrency(this.selectedCurrency);
     this.showItems = false;
  }
}
