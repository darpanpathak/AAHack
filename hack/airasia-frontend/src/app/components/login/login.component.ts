import { AppService } from './../../services/app.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  frmsignIn: FormGroup;
  constructor(public _fb: FormBuilder, public _appServices: AppService, public route: Router) {
    this.frmsignIn = this._fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  ngOnInit() {

  }

  doLogin({ value, valid }) {
    if (valid) {
      this._appServices.login(value).toPromise().then(result => {
        if (result.token) {
          localStorage.setItem('token', result.token);
          this.route.navigate(["app/home"]);
        }
      }).catch(err => {
        alert("Unable to Login");
      });
    }
    else {
      alert("Invalid form");
    }
  }

}
