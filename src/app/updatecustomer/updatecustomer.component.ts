import {Component, OnInit} from '@angular/core';
import {BackendAPIService} from "../backend-api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.scss']
})
export class UpdatecustomerComponent implements OnInit {
  id: number;
  customerName: string;
  email: string;
  address: string;
  customer: any;

  constructor(public api: BackendAPIService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.id = params.id;
      this.api.detail(this.id).subscribe(
        result => {
          this.customer = result;
        }
      );
    });
  }

  updateCustomer(updateForm: HTMLFormElement) {
    this.customerName = updateForm.username.value;
    this.email = updateForm.email.value;
    this.address = updateForm.address.value;

    this.api.update(this.id, this.customerName, this.email, this.address).subscribe(result => {
      // console.log(result);
      this.router.navigate(['/customer']);
    });
  }
}
