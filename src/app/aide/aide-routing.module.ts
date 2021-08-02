import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AideComponent} from './aide.component';
import {AuthGuard} from '../shared/auth/auth-guard.service';

const routes: Routes = [
  {
    path: '',
     component: AideComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Aide'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AideRoutingModule { }

export const routedComponents = [AideComponent];
