import { Component, OnInit } from '@angular/core';
import { JwtHelper } from 'angular2-jwt/angular2-jwt.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-routes',
  templateUrl: './app-routes.component.html',
  styleUrls: ['./app-routes.component.css']
})
export class AppRoutesComponent implements OnInit {
  token = "";
  username = "";
  constructor(public route : Router) { 
    this.token = localStorage.getItem('token');
  }

  ngOnInit() {
    this.username = JwtHelper.prototype.decodeToken(this.token).username;
  }

  doLogout(){
    localStorage.removeItem('token');
    this.route.navigate(["account/signin"]);
  }

}
