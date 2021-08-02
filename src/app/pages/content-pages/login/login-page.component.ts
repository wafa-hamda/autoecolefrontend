import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthService} from '../../../shared/auth/auth.service';
import {first} from 'rxjs/operators';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent {

    @ViewChild('f', {static: false}) loginForm: NgForm;
  error = '';

    constructor(private router: Router,
        private route: ActivatedRoute,
        private auth: AuthService) { }

    // On submit button click
    onSubmit() {
        this.loginForm.reset();
    }
    // On Forgot password link click
    onForgotPassword() {
        this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
    }
    // On registration link click
    onRegister() {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    }


  login() {
    // @ts-ignore
    this.auth.signinUser('admin', 'admin')
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['dashboard']);
        },
        error => {
          this.error = error;
        });
  }
}
