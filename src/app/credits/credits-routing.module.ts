import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreditsComponent} from './credits.component';
import {AuthGuard} from '../shared/auth/auth-guard.service';


const routes: Routes = [
  {
    path: '',
     component: CreditsComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Credits'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditsRoutingModule { }

export const routedComponents = [CreditsComponent];
