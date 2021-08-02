import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoniteursComponent} from './moniteurs.component';
import {AuthGuard} from '../shared/auth/auth-guard.service';


const routes: Routes = [
  {
    path: '',
     component: MoniteursComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Moniteurs'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoniteursRoutingModule { }

export const routedComponents = [MoniteursComponent];
