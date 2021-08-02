import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ChartistModule } from 'ng-chartist';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MoniteursRoutingModule} from './moniteurs-routing.module';
import {MoniteursComponent} from './moniteurs.component';



@NgModule({
  imports: [
    CommonModule,
    MoniteursRoutingModule,
    ChartistModule,
    NgbModule,
    Ng2SmartTableModule

  ],
  exports: [],
  declarations: [
    MoniteursComponent,
  ],
  providers: [],
})
export class MoniteursModule { }
