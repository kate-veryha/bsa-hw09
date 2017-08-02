import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: 'all-users.component.html',
  styles: [
    `
      a {
        padding: 3px;
        font-weight: bold;
        color: darkslateblue;;
        border: 1px solid darkslateblue;
      }
      a:hover {
        background-color: darkslateblue;
        color: white;
      }
    `
  ]
})
export class AllUsersComponent implements OnInit {
  users: User[];
  queryString: string;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getAllUsers();
  }

  sortUsers(field: string, sortOrder: string = 'asc' || 'desc') {
    const order: number = (sortOrder === 'asc') ? 1 : -1;
    if (field === 'birthYear') {
      this.users.sort((a: User, b: User) => order * (a[field] - b[field]));
    } else {
      this.users.sort((a: User, b: User) => order * a[field].localeCompare(b[field]));
    }
  }

  search() {}
}
