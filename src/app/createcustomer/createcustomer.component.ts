import {Component, OnInit} from '@angular/core';
import {BackendAPIService} from '../backend-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.scss']
})
export class CreatecustomerComponent implements OnInit {
  name: string;
  email: string;
  address: string;

  constructor(public api: BackendAPIService,
              private router: Router) {
  }

  ngOnInit() {
  }

  create(createForm: HTMLFormElement) {
    this.name = createForm.username.value;
    this.email = createForm.email.value;
    this.address = createForm.address.value;

    this.api.create(this.name, this.email, this.address).subscribe(result => {
      console.log(result);
      this.router.navigate(['/customer']);
    });
  }
}
