import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AllUsersComponent} from '../components/all-users/all-users.component';
import {EditProfileComponent} from '../components/edit-profile/edit-profile.component';
import {HomeComponent} from '../components/home/home.component';
import {HomeRoutingModule} from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ],
  declarations: [
    AllUsersComponent,
    EditProfileComponent,
    HomeComponent,
  ]
})
export class HomeModule {}
