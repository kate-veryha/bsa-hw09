import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';

@Component ({
  selector: 'app-credentials',
  template: `
    <div *ngIf="!userRegistered">User not found =(</div>
    <div class="credentials"
         *ngIf="userRegistered">
      <h3>Email</h3>
      <label>{{requestedUser.email}}</label>
      <h3>Password</h3>
      <label>{{requestedUser.password}}</label>
    </div>
  `,
  styleUrls: ['./forgot-password-credentials.component.scss'],
})
export class CredentialsChildComponent implements OnInit {
  @Input() email: string;
  userRegistered: boolean;
  requestedUser: User;

  constructor(private userService: UserService, route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(this.email);
    this.userRegistered = this.userService.emailInDB(this.email);
    this.requestedUser = this.userService.getUserByEmail(this.email);
    console.log(this.userRegistered);
  }

}
