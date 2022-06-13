import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GraphicsComponent } from "./graphics/graphics.component";
import { PagesComponent } from "./pages.component";
import { ProgressComponent } from "./progress/progress.component";

const routes : Routes = [
  {
    path:'dashboard',
    component: PagesComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'progress', component: ProgressComponent},
      {path: 'graphics', component: GraphicsComponent},
      {path: '',redirectTo:'/dashboard', pathMatch: 'full'},
    ]
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[ RouterModule]
})
export class PagesRoutingModule{

}
