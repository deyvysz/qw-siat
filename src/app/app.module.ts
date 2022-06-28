import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//******************** MODULOS ************************/
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import{NgChartsModule} from 'ng2-charts'

import { AppComponent } from './app.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';



@NgModule({
  declarations: [
    AppComponent,
    NotpagefoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    NgChartsModule,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
