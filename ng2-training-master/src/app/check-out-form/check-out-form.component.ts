import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-check-out-form',
  templateUrl: './check-out-form.component.html',
  styleUrls: ['./check-out-form.component.css']
})
export class CheckOutFormComponent implements OnInit {

  error: string;

  state: Observable<any>;

  constructor(private service: HttpClient) {
    this.state = this.service.get('http://localhost:8000/states');
  }

  ngOnInit() {
  }

  logForm(value) {

  }
}
