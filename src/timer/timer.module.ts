import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimerComponent} from './timer.component';
import {FormsModule} from '@angular/forms';

@NgModule ({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TimerComponent
  ],
  exports: [TimerComponent]
})

export class TimerModule {}
