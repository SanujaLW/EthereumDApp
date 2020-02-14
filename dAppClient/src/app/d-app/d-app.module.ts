import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DAppRoutingModule } from './d-app-routing.module';
import { DAppComponent } from './d-app.component';


@NgModule({
  declarations: [DAppComponent],
  imports: [
    CommonModule,
    DAppRoutingModule
  ]
})
export class DAppModule { }
