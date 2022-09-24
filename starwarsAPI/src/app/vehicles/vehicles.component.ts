import { Component, OnInit } from '@angular/core';
import { VehicleplaceholderService } from '../vehicleplaceholder.service';
import { Vehicle } from '../types/Vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css'],
})
export class VehiclesComponent implements OnInit {
  vehicles: Vehicle[] = [];

  constructor(private Vehicleplaceholderservice: VehicleplaceholderService) {}

  ngOnInit(): void {
    this.getVehicle();
  }

  getVehicle(): void {
    this.Vehicleplaceholderservice.getVehicles().subscribe((data) => {
      console.log(data);
      this.vehicles = data.results;
    });
  }
}
