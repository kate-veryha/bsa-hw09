import {RouterModule, Routes} from '@angular/router';
import {ForgotPasswordComponent} from '../components/forgot-password/forgot-password.component';
import {CredentialsChildComponent} from '../components/forgot-password/credentials.child.component';
import {NgModule} from '@angular/core';

const forgotPasswordRoutes: Routes = [
  {
    path: 'forgot',
    component: ForgotPasswordComponent,
    children : []
  }, {
    path: 'password-restore',
    component: CredentialsChildComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(forgotPasswordRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ForgotPasswordRoutingModule { }
