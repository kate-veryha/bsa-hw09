import { Injectable } from '@angular/core';
import { User} from '../models/user.model';

@Injectable()

export class UserService {

  getAllUsers(): User[] {
    return (JSON.parse(localStorage.getItem('users'))) || (new Array<User>());
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
    const users = this.getAllUsers();
    if (this.userRegistered(user)) {
      users[this.getIndexByEmail(user.email)] = user;
      localStorage.setItem('users', JSON.stringify(users));
    }
  }

  setCurrentUser(userWithEmail: User) {
    const users = this.getAllUsers();
    if (users.indexOf(userWithEmail)) {
      const index = users.map( item => item.email ).indexOf(userWithEmail.email);
      userWithEmail = users[index];
    localStorage.setItem('currentUser', JSON.stringify(userWithEmail));
  }}

  getCurrentUser(): User {
    return Object.assign(
      new User, JSON.parse(localStorage.getItem('currentUser')) || {});
  }

  getIndexByEmail(email: string): number {
    return this.getAllUsers()
      .findIndex(item => (item.email === email));
  }

  getUserByEmail(email: string): User {
    return this.getAllUsers()[this.getIndexByEmail(email)];
  }

  userRegistered(user: User): boolean {
    return (this.getAllUsers()
      .findIndex(item => (item.email === user.email)) >= 0) ;
  }

  getIndex(user: User): number {
    return this.getIndexByEmail(user.email);
  }

  getUserByIndex(index: number): User {
    return this.getAllUsers()[index];
  }

  emailInDB(email: string) {
    return (this.getAllUsers()
      .findIndex(item => (item.email === email)) >= 0) ;
  }
}
