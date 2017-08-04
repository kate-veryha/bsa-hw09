import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../../models/user.model';
import {NgForm} from '@angular/forms';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;
  isLoginDataCorrect: boolean;
  constructor(public router: Router, private userService: UserService) {
    this.user = new User();
    this.isLoginDataCorrect = true;
  }

  ngOnInit() {}

  logIn(form: NgForm) {
    this.user = new User(form.value);
    if (this.userService.getIndexByEmail(this.user.email) >= 0
      && this.user.password === this.userService.getUserByEmail(this.user.email).password
    ) {
      this.router.navigate(['/home']);
      this.userService.setCurrentUser(this.user);
    } else {
      this.isLoginDataCorrect = false;
    }
  }


}
