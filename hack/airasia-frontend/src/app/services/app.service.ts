import { Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt/angular2-jwt.js';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class AppService {

  constructor(public authHttp: AuthHttp, public http: Http) {
  }

  login(body) {
    return this.http.post(environment.host + "/account/login", body).map(res => res.json());
  }

  getFlightDetails() {
    return this.authHttp.get(environment.host + "/api/flightdetails").map(res => res.json());
  }

}
