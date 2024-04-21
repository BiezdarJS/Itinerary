import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './component/heading.component';
import { HeadingDirective } from './directive/heading.directive';



@NgModule({
  declarations: [HeadingComponent, HeadingDirective],
  imports: [
    CommonModule
  ],
  exports: [HeadingDirective],
})
export class HeadingModule { }
