import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent implements OnInit {
  yearList: number[] = [];
  user: User;

  constructor(private userService: UserService) {
    this.user = new User();
    for (let i = 1950; i <= 2017; i++) { this.yearList.push(i); }
  }

  ngOnInit() {
  }

  register(form: NgForm) {
    this.user = form.value;
    this.userService.create(this.user);
  }
}
