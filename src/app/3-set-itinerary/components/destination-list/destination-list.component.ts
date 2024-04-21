import { Component } from '@angular/core';
import { DestinationListItemComponent } from './destination-list-item/destination-list-item.component';
import { DestinationEnum } from '../../enums/destinations.enum';

@Component({
  selector: 'iy-destination-list',
  standalone: true,
  imports: [DestinationListItemComponent],
  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.scss'
})
export class DestinationListComponent {
  protected readonly DestinationEnum = DestinationEnum;
}
