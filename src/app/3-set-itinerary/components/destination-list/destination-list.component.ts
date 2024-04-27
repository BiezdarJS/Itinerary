import { Component, Input } from '@angular/core';
import { DestinationListItemComponent } from './destination-list-item/destination-list-item.component';
import { DestinationEnum } from '../../enums/destinations.enum';
import { IDestinationListItem } from '../../interfaces/i-destination-list';
import { SortDestinationComponent } from '../sort-destination/sort-destination.component';
import { DestinationListSearchComponent } from './destination-list-search/destination-list-search.component';

@Component({
  selector: 'iy-destination-list',
  standalone: true,
  imports: [DestinationListItemComponent, SortDestinationComponent, DestinationListSearchComponent],
  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.scss'
})
export class DestinationListComponent {
  @Input() destinationList?: IDestinationListItem[];

  protected readonly DestinationEnum = DestinationEnum;
}
