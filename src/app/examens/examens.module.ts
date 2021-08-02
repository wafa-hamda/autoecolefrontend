import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamensRoutingModule } from './examens-routing.module';
import { ChartistModule } from 'ng-chartist';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ExamensComponent} from './examens.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';



@NgModule({
    imports: [
        CommonModule,
        ExamensRoutingModule,
        ChartistModule,
        NgbModule,
      Ng2SmartTableModule
    ],
    exports: [],
    declarations: [
        ExamensComponent,
    ],
    providers: [],
})
export class ExamensModule { }
