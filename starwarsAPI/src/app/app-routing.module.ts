import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //imports router
// import { CommonModule } from '@angular/common';
import { SpeciesComponent } from './species/species.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  { path: 'species-component', component: SpeciesComponent },
  { path: 'vehicle-component', component: VehiclesComponent },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  // imports: [CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
