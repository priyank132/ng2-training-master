import { Component } from '@angular/core';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-checkout-view',
  templateUrl: './check-out-view.component.html',
  styleUrls: ['./check-out-view.component.css']
})
export class CheckoutViewComponent {

  constructor(private cartService: CartService) {

  }
}
