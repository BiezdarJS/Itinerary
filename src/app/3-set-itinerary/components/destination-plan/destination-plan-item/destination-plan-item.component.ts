import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DestinationEnum } from '../../../enums/destinations.enum';
import { DestinationPlanSubDestinationsComponent } from '../destination-plan-sub-destinations/destination-plan-sub-destinations.component';

@Component({
  selector: 'iy-destination-plan-item',
  standalone: true,
  imports: [DestinationPlanSubDestinationsComponent],
  templateUrl: './destination-plan-item.component.html',
  styleUrl: './destination-plan-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DestinationPlanItemComponent {
  @Input() destination?: DestinationEnum;

  protected readonly DestinationEnum = DestinationEnum;
}
