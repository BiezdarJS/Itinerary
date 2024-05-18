import { Component, Input } from '@angular/core';
import { DestinationListItemComponent } from './destination-list-item/destination-list-item.component';
import { DestinationEnum } from '../../enums/destinations.enum';
import { IDestination } from '../../interfaces/i-destinations';
import { SortDestinationComponent } from '../sort-destination/sort-destination.component';
import { DestinationListSearchComponent } from './destination-list-search/destination-list-search.component';
import {CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'iy-destination-list',
  standalone: true,
  imports: [
    DragDropModule,
    DestinationListItemComponent,
    SortDestinationComponent,
    DestinationListSearchComponent
  ],
  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.scss'
})
export class DestinationListComponent {
  @Input() destinationList?: IDestination[];

  protected readonly DestinationEnum = DestinationEnum;

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    ) } else {
      transferArrayItem (
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
