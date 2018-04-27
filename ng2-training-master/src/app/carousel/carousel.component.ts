import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  page = 0;

  constructor() {
    setInterval(() => this.onNextClick(),5000);
  }

  onPreviousClick() {
    if (this.page === 0) {
      this.page = 2;
    }
    // tslint:disable-next-line:one-line
    else {
      this.page = this.page - 1;
    }
  }

  onNextClick() {
    if (this.page === 2) {
      this.page = 0;
    }
    // tslint:disable-next-line:one-line
    else {
      this.page = this.page + 1;
    }
  }

  ngOnInit() {
  }
}
