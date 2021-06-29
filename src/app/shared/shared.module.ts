import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLoopDirective } from '../_directives/custom-loop.directive';

@NgModule({
  declarations: [CustomLoopDirective],
  imports: [
    CommonModule
  ],
  exports: [
    CustomLoopDirective
  ]
})
export class SharedModule { }
