import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DAppComponent } from './d-app.component';
import { NumberGetSetComponent } from './number-get-set/number-get-set.component';

const routes: Routes = [
  { path: '', component: DAppComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DAppRoutingModule { }
