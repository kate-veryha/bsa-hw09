import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
  }

  goToEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route});
  }

  goToAll() {
    this.router.navigate(['all'], { relativeTo: this.route });
  }

  goToTimer() { }
}
