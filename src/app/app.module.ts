import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import {RegisterGuard} from './guards/register.guard';
import {UserService} from './services/user.service';
import {ForgotPasswordModule} from './modules/forgot-password.module';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import {HomeRoutingModule} from './modules/home-routing.module';
import {TimerModule} from '../timer/timer.module';
import {UserSearchPipe} from './pipes/user-search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    EditProfileComponent,
    AllUsersComponent,
    UserSearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ForgotPasswordModule,
    TimerModule,
    HomeRoutingModule,
    AppRoutingModule,
  ],
  providers: [RegisterGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
