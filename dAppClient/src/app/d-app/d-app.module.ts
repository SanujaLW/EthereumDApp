import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DAppRoutingModule } from './d-app-routing.module';
import { DAppComponent } from './d-app.component';
import { NumberGetSetComponent } from './number-get-set/number-get-set.component';


@NgModule({
  declarations: [DAppComponent, NumberGetSetComponent],
  imports: [
    CommonModule,
    DAppRoutingModule
  ]
})
export class DAppModule { }
