import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarsComponent } from './calendar.component';
import {AuthGuard} from '../shared/auth/auth-guard.service';

const routes: Routes = [
  {
    path: '',
     component: CalendarsComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Calendar'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarRoutingModule { }

export const routedComponents = [CalendarsComponent];
