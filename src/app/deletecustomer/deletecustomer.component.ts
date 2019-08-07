import {Component, OnInit} from '@angular/core';
import {BackendAPIService} from '../backend-api.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-deletecustomer',
  templateUrl: './deletecustomer.component.html',
  styleUrls: ['./deletecustomer.component.scss']
})
export class DeletecustomerComponent implements OnInit {
  id: number;

  constructor(public api: BackendAPIService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    if (confirm('Do you want delete?')) {
      this.activeRoute.params.subscribe(params => {
        this.id = params.id;
      });
      this.deleteCustomer(this.id);
    } else {
      this.router.navigate(['/customer']);
    }
  }

  deleteCustomer(id: number) {
    this.api.delete(id).subscribe(result => {
      this.router.navigate(['/customer']);
    });
  }
}
