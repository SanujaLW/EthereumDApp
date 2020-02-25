import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DAppRoutingModule } from './d-app-routing.module';
import { DAppComponent } from './d-app.component';
import { NumberGetSetComponent } from './number-get-set/number-get-set.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [DAppComponent, NumberGetSetComponent, AdminComponent],
  imports: [
    CommonModule,
    DAppRoutingModule
  ]
})
export class DAppModule { }
