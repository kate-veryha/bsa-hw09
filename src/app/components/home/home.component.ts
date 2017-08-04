import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styles: [`
    * {
      margin: 0;
      padding: 0;
    }
    a {
      display: inline-block;
      margin: 5px;
      padding: 5px;
      color: darkslateblue;
      border: 1px solid darkslateblue;
    }
    a:hover {
      color: white;
      background-color: darkslateblue;
    }
    header {
      display: flex;
      align-items: baseline;
    }
    h1 {
      padding: 10px;
      margin-right: 20px;
      height: 20px;
    }
    button {
      margin-left: 300px;
    }
  `]
})
export class HomeComponent implements OnInit {
  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) {}
  ngOnInit() {
  }

  goToEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route});
  }

  goToAll() {
    this.router.navigate(['all'], { relativeTo: this.route });
  }

  logOut() {
    this.userService.setCurrentUser(new User());
    this.router.navigate(['login']);
  }
}
