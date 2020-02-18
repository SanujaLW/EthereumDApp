import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';
import { AuthGuard } from './d-app/guards/auth.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent },
  { path: 'dApp', loadChildren: () => import('./d-app/d-app.module').then(m => m.DAppModule), canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
