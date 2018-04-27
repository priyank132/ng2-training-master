import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <div>
      <h2>Hello {{firstName}} {{name}}</h2>
    </div>
  `
})
export class HelloComponent {

  name : string;
  firstName:string;

  constructor() {
    this.name = 'Angular 5.0';
    this.firstName = "Priyank"
  }

}
