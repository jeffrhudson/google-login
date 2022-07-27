import { NgLocalization } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

declare let google: any;

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome <span *ngIf="isAuthenticated" style = "color: red">{{name}}</span></h1>
    <h2 *ngIf="isAuthenticated">Your Bearer Token is <span style = "color: red">{{token}}</span></h2>
    <button *ngIf="!isAuthenticated" (click) = "login()">Click here to sign in with Google</button>
    <button *ngIf="isAuthenticated" (click) = "logout()">Click here to logout</button>
  `,
  styles: []
})
export class AppComponent implements OnInit{
  token = "";
  name = "";
  isAuthenticated = false;
  imageUrl = ""

  constructor(public oidcSecurityService: OidcSecurityService) {}

  ngOnInit() {
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, idToken }) => {
      this.isAuthenticated = isAuthenticated;
      this.token = idToken;
      this.name = userData.given_name;
      this.imageUrl = userData.picture;
    });
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService.logoff();
    location.reload();
  }
}
