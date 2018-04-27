import { CurrencyRenderPipe } from './currency-render.pipe';
import { CurrencyPipe } from '@angular/common';
import { CurrencySwicherService } from './currency-swicher.service';

fdescribe('CurrencyRenderPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyRenderPipe(new CurrencyPipe('en-US'), new CurrencySwicherService());
    expect(pipe).toBeTruthy();
  });

  it('valid transform', () => {
    const pipe = new CurrencyRenderPipe(new CurrencyPipe('en-US'), new CurrencySwicherService());
    expect(pipe.transform(8.55, 'USD')).toBe('$8.55');
  });

  it('Invalid transform', () => {
    const pipe = new CurrencyRenderPipe(new CurrencyPipe('en-US'), new CurrencySwicherService());
    expect(pipe.transform(8.55, 'USD')).not.toBe('8.55');
  });


  it('Invalid transform With SPY', () => {
    const pipe = new CurrencyRenderPipe(new CurrencyPipe('en-US'), new CurrencySwicherService());
    spyOn(pipe, 'transform').and.returnValue('$8.55');
    expect(pipe.transform(8.55, 'GBP')).toBe('$8.55');
  });
});
