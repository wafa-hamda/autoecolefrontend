import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './chat.component';
import {AuthGuard} from '../shared/auth/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        component: ChatComponent,
      canActivate: [AuthGuard],
      data: {
            title: 'Chat'
        },

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ChatRoutingModule { }

export const routedComponents = [ChatComponent];
