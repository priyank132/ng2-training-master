import { Pipe, PipeTransform, } from '@angular/core';
import { CurrencyPipe, getCurrencySymbol, DecimalPipe } from '@angular/common';
import { CurrencySwicherService } from './currency-swicher.service';

@Pipe({
  name: 'currencyRender',
  pure: false
})
export class CurrencyRenderPipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe, private currencySwicher: CurrencySwicherService) {
  }

  transform(value: any, code: string = 'USD', rate: number = 1.0): any {
    if (code !== 'EUR') {
      return this.currencyPipe.transform(value * rate, code, true, '1.0-2');
    } else {
      const decimalPipe = new DecimalPipe('en-US');
      return decimalPipe.transform(value * rate, '1.0-2') + getCurrencySymbol(code, 'wide');
    }
  }
}
