import { Injectable } from '@angular/core';
import { User} from '../models/user.model';

@Injectable()

export class UserService {

  getUsers(): User[] {
    return JSON.parse(localStorage.getItem('users')) || (new Array<User>());
  }

  create(user: User) {
    const usersData = localStorage.getItem('users');
    let users = [] as User[];
    if (usersData) {
      users = JSON.parse(usersData);
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  update(user: User) {
    const users = this.getUsers();
    if (users.includes(user)) {
      const index = users.map( item => item.email ).indexOf(user.email);
      users[index] = user;
      localStorage.setItem('users', JSON.stringify(users));
    }
  }
}
