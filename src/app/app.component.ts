import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

declare let google: any;

@Component({
  selector: 'app-root',
  template: `
    <!-- <div
    id="g_id_onload"
    data-client_id="749824175933-egjopdpm4n3b41rb05t1l0rjvhbqbe1o.apps.googleusercontent.com"
    data-cancel_on_tap_outside="false"
    (data-callback)="response">
  </div> -->
    <button asl-google-signin-button>login</button>
  `,
  styles: []
})
export class AppComponent implements OnInit{
  title = 'google-login';

  constructor(private authService: SocialAuthService){}

  ngOnInit(): void {
    
  }

  response(response: any){
    console.log("teste");
    console.log(response);
  }
}
