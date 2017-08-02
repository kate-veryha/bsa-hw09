import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ForgotPasswordRoutingModule} from './forgot-password-routing.module';
import {ForgotPasswordComponent} from '../components/forgot-password/forgot-password.component';
import {CredentialsChildComponent} from '../components/forgot-password/credentials.child.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ForgotPasswordRoutingModule
  ],
  declarations: [
    ForgotPasswordComponent,
    CredentialsChildComponent,
  ]
})
export class ForgotPasswordModule { }
