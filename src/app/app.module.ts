import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider
} from 'angularx-social-login';
import { GoogleSigninButtonDirectiveDirective } from './google-signin-button-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    GoogleSigninButtonDirectiveDirective
  ],
  imports: [
    BrowserModule, 
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '749824175933-egjopdpm4n3b41rb05t1l0rjvhbqbe1o.apps.googleusercontent.com'
            )
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
