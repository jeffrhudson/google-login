import { Directive, ElementRef } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { take } from 'rxjs';

declare let google: any;


@Directive({
  selector: '[asl-google-signin-button]'
})
export class GoogleSigninButtonDirectiveDirective {

  constructor(
    el: ElementRef,
    socialAuthService: SocialAuthService
  ) {
    socialAuthService.initState.pipe(take(1)).subscribe(() => {
      google.accounts.id.renderButton(el.nativeElement, {
        type: 'icon',
        size: 'medium',
      });
    })
  }

}