import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutesComponent } from './components/app-routes/app-routes.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './common/auth.guard';
import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth } from 'angular2-jwt/angular2-jwt.js';
import { AppService } from './services/app.service';
import { Http, RequestOptions, HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    headerName: 'Authorization',
    headerPrefix: '',
    noTokenScheme: true,
    tokenGetter: (() => localStorage.getItem('token')),
    globalHeaders: [{ 'Content-Type': 'application/json' }],
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    AppRoutesComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [AppService,AuthHttp, AuthHttp, {
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [Http, RequestOptions]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
