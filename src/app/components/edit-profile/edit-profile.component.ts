import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: 'edit-profile.component.html',
  styles: []
})
export class EditProfileComponent implements OnInit {
  currentUser: User;
  yearList: number[] = [];

  constructor(public userService: UserService) {
    this.currentUser = this.userService.getCurrentUser();
    for (let i = 1950; i <= 2017; i++) { this.yearList.push(i); }
  }

  ngOnInit() {
  }

  editUser(form: NgForm) {
    this.currentUser = form.value;
    this.userService.update(this.currentUser);
    this.userService.setCurrentUser(this.currentUser);
    debugger;
  }
}
