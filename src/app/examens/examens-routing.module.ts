import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExamensComponent} from './examens.component';
import {AuthGuard} from '../shared/auth/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    component: ExamensComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Examens'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamensRoutingModule { }
