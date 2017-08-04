import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {NgModule} from '@angular/core';
import {EditProfileComponent} from '../components/edit-profile/edit-profile.component';
import {AllUsersComponent} from '../components/all-users/all-users.component';

const homeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'edit',
        component: EditProfileComponent,
      }, {
        path: 'all',
        component: AllUsersComponent,
      },
      ]
  }];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class HomeRoutingModule {}
