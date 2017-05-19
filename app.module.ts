import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar'
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { appRoutes } from "./app.routes";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GYWebComponent } from './gyweb/gyweb.component';
import { GyItem1Component } from './gyweb/gy-item1/gy-item1.component';
import { GyItem2Component } from './gyweb/gy-item2/gy-item2.component';
import { GyItem3Component } from './gyweb/gy-item3/gy-item3.component';
import { GyItem4Component } from './gyweb/gy-item4/gy-item4.component';
import { GyItem5Component } from './gyweb/gy-item5/gy-item5.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GYWebComponent,
    GyItem1Component,
    GyItem2Component,
    GyItem3Component,
    GyItem4Component,
    GyItem5Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ProgressbarModule.forRoot()
  ],
  providers: [],
  exports:[RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
