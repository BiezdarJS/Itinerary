import { NgModule } from '@angular/core';
import { HeadingModule } from './_shared/modules/heading/heading.module';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  imports: [
    HeadingModule,
    DragDropModule
  ],
})
export class AppModule { }
