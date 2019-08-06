import {Component, OnInit} from '@angular/core';
import {BackendAPIService} from '../backend-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss']
})
export class CustomerlistComponent implements OnInit {
  customers: any;

  constructor(public api: BackendAPIService,
              private router: Router) {
  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.api.getCustomerList().subscribe(result => this.customers = result);
  }
}
