import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartistModule } from 'ng-chartist';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {VehiculesRoutingModule} from './vehicules-routing.module';
import {VehiculesComponent} from './vehicules.component';




@NgModule({
  imports: [
    CommonModule,
    VehiculesRoutingModule,
    ChartistModule,
    NgbModule
  ],
  exports: [],
  declarations: [
    VehiculesComponent,
  ],
  providers: [],
})
export class VehiculesModule { }
