import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AideRoutingModule} from './aide-routing.module';
import {AideComponent} from './aide.component';



@NgModule({
  imports: [
    CommonModule,
    AideRoutingModule,
    NgbModule
  ],
  exports: [],
  declarations: [
    AideComponent,
  ],
  providers: [],
})
export class AideModule { }
