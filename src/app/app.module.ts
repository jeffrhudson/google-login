import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule.forRoot({
      config: {
        authority: 'https://accounts.google.com',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: '749824175933-egjopdpm4n3b41rb05t1l0rjvhbqbe1o.apps.googleusercontent.com',
        scope: 'openid profile email',
        responseType: 'id_token token',
        silentRenew: true,
        useRefreshToken: true,
        logLevel: LogLevel.Error,
        unauthorizedRoute: window.location.origin,
        startCheckSession: true
      },
    }),
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
