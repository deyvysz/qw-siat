import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import{NgChartsModule} from 'ng2-charts'

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';





@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraphicsComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ComponentsModule,
    NgChartsModule,

  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    GraphicsComponent,
    PagesComponent,
    ProgressComponent,
    NgChartsModule
  ]
})
export class PagesModule { }
