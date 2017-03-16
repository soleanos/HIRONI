import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { HeroService } from './hero.service';
import { AppComponent } from './app.component';
import { DetailHeroComponent } from './detail-hero/detail-hero.component';
import { HeroesComponentComponent } from './heroes-component/heroes-component.component';
import {  Routes,RouterModule}   from '@angular/router';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { AppRoutingModule }     from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    DetailHeroComponent,
    HeroesComponentComponent,
    DashboardComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  exports: [RouterModule],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
