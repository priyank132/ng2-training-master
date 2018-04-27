import { Injectable } from '@angular/core';

@Injectable()
export class CurrencySwicherService {
  public selectedCurrency: string;
  constructor() { }

  changeCurrency(selectedCurrency: string) {
    console.log(selectedCurrency);
    this.selectedCurrency = selectedCurrency;
  }

  getChangedCurrency() {
    console.log(this.selectedCurrency);
    return this.selectedCurrency;
  }
}
