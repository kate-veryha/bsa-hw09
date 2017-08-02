import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: 'forgot-password.component.html',
  styleUrls: ['forgot-password-credentials.component.scss']
})

export class ForgotPasswordComponent implements OnInit {
  email: string;
  captcha: string;

  constructor() { }

  ngOnInit() {
  }

}
