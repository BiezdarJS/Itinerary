import { Component, Input } from '@angular/core';
import { IDestinationListItem } from '../../../interfaces/i-destination-list';

@Component({
  selector: 'iy-destination-list-item',
  standalone: true,
  imports: [],
  templateUrl: './destination-list-item.component.html',
  styleUrl: './destination-list-item.component.scss'
})
export class DestinationListItemComponent {
  @Input() destination?: IDestinationListItem;

}
