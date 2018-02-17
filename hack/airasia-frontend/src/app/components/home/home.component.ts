import { AppService } from './../../services/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  flightDetail: any;
  otherDetail  :any;
  constructor(public _appService: AppService) { }

  ngOnInit() {
    this._appService.getFlightDetails().toPromise().then(result => {

      this.flightDetail = result.flightDetail;
      this.otherDetail = result.other;

    }).catch(err => {
      console.log("Not found");
    });
  }

}
