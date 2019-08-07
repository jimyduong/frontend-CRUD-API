import {Component, OnInit} from '@angular/core';
import {BackendAPIService} from '../backend-api.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  customer: any;
  id: number;

  constructor(public api: BackendAPIService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.id = params.id;
    });
    this.getDetail(this.id);
  }

  getDetail(id: number) {
    this.api.detail(id).subscribe(result => {
      this.customer = result;
      console.log('customer:', this.customer);
    });
  }
}

