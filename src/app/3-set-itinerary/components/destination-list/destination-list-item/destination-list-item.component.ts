import { Component, Input } from '@angular/core';
import { DestinationEnum } from '../../../enums/destinations.enum';

@Component({
  selector: 'iy-destination-list-item',
  standalone: true,
  imports: [],
  templateUrl: './destination-list-item.component.html',
  styleUrl: './destination-list-item.component.scss'
})
export class DestinationListItemComponent {
  @Input() destination: DestinationEnum | null = null;

  protected readonly DestinationEnum = DestinationEnum;
}
