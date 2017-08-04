import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ControlValueAccessor} from '@angular/forms';

@Component ({
  selector: 'app-forgot-password',
  templateUrl: 'forgot-password.component.html',
  styleUrls: ['forgot-password-credentials.component.scss']
})

export class ForgotPasswordComponent implements OnInit, ControlValueAccessor {
  public email: string;
  captcha: string;
  dataShown: boolean;

  constructor (
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.dataShown = false;
  }

  ngOnInit() {  }

  writeValue() {  }

  showCredentials() {
    console.log(this.email);
    if (this.captcha === '8') {
      this.dataShown = true;
    } else {
      alert('Incorrect captcha. Try again');
    }
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}
}
