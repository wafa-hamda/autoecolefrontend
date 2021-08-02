import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VehiculesComponent} from './vehicules.component';
import {AuthGuard} from '../shared/auth/auth-guard.service';


const routes: Routes = [
  {
    path: '',
     component: VehiculesComponent,
     canActivate: [AuthGuard],
    data: {
      title: 'Vehicules'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiculesRoutingModule { }

export const routedComponents = [VehiculesComponent];
