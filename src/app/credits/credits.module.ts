import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CreditsRoutingModule} from './credits-routing.module';
import {CreditsComponent} from './credits.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    CreditsRoutingModule,
    NgbModule,
    Ng2SmartTableModule
  ],
  exports: [],
  declarations: [
    CreditsComponent,
  ],
  providers: [],
})
export class CreditsModule { }
