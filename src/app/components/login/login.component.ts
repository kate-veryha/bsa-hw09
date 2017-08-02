import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = new User();
    console.log('on login page');
  }

  onClickRegister() {
    this.router.navigate(['/register']);
    console.log('on register page');
    return;
  }

  onClickForgot() {
    this.router.navigate(['/forgot']);
    console.log('on forgot page');
    return;
  }

  logIn(formData) {
  }
}
