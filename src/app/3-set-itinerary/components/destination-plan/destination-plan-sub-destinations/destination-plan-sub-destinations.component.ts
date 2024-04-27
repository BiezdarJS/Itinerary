import { ChangeDetectionStrategy, Component, Input, Signal, computed } from '@angular/core';
import { DestinationPlanSubDestinationItemComponent } from './destination-plan-sub-destination-item/destination-plan-sub-destination-item.component';
import { DestinationPlanSubDestinationBtnComponent } from './destination-plan-sub-destination-btn/destination-plan-sub-destination-btn.component';
import { ISubDestination } from '../../../interfaces/i-destination-plan';

@Component({
  selector: 'iy-destination-plan-sub-destinations',
  standalone: true,
  imports: [
    DestinationPlanSubDestinationItemComponent,
    DestinationPlanSubDestinationBtnComponent
  ],
  templateUrl: './destination-plan-sub-destinations.component.html',
  styleUrl: './destination-plan-sub-destinations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DestinationPlanSubDestinationsComponent {
  @Input() subDestinations?: ISubDestination[];

  public subDestinationsExist: Signal<boolean | undefined> = computed(() => {
    if (this.subDestinations) {
      return this.subDestinations?.length > 0;
    }
    return;
  });
}
