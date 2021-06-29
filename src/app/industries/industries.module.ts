import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndustriesRoutingModule } from './industries-routing.module';
import { IndustriesComponent } from './industries.component';
import { AutomotiveComponent } from './automotive/automotive.component';
import { CarsComponent } from './automotive/cars/cars.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [IndustriesComponent, AutomotiveComponent, CarsComponent],
  imports: [
    CommonModule,
    IndustriesRoutingModule,
    SharedModule
  ]
})
export class IndustriesModule { }
