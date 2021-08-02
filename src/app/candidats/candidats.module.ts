import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CandidatsComponent} from './candidats.component';
import {CandidatsRoutingModule} from './candidats-routing.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';




@NgModule({
  imports: [
    CommonModule,
    CandidatsRoutingModule,
    NgbModule,
    Ng2SmartTableModule
  ],
  exports: [],
  declarations: [
    CandidatsComponent,
  ],
  providers: [],
})
export class CandidatsModule { }
