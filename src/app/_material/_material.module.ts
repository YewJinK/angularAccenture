import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './_material-routing.module';
import { CardComponent } from './card/card.component';
import { MatButtonModule, MatCardModule, MatGridListModule } from '@angular/material';
import { GridListComponent } from './grid-list/grid-list.component';
import { FormsControlComponent } from './forms-control/forms-control.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CardComponent, GridListComponent, FormsControlComponent],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    ReactiveFormsModule
  ]
})
export class MaterialModule { }
