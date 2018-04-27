import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LicensePlateServiceService } from '../license-plate-service.service';
import { LicensePlate } from '../license-plate';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-store-view',
  templateUrl: './store-view.component.html',
  styleUrls: ['./store-view.component.css']
})
export class StoreViewComponent implements OnInit {

  showPopup= false;

  licensePlates: Observable<LicensePlate[]>;

  selectedPlatId;

  constructor(public licenseService: LicensePlateServiceService, private cartService: CartService) {
    this.licensePlates =  licenseService.getPlatList();
  }


  onClose(event) {
    console.log(event);
  }

  ngOnInit() {
  }

  onAddToCart(plate) {
    this.cartService.addToCart(plate).subscribe(data => this.showPopup = true);
    this.selectedPlatId = plate.title;
  }

}
