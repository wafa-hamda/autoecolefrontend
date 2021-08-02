import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CandidatsComponent} from './candidats.component';
import {AuthGuard} from '../shared/auth/auth-guard.service';


const routes: Routes = [
  {
    path: '',
     component: CandidatsComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Candidats'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidatsRoutingModule { }

export const routedComponents = [CandidatsComponent];
