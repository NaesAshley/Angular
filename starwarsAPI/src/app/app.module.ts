import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SpeciesComponent } from './species/species.component';
import { AppRoutingModule } from './app-routing.module';
import { VehiclesComponent } from './vehicles/vehicles.component';

@NgModule({
  declarations: [AppComponent, SpeciesComponent, VehiclesComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
