import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DestinationPlanSubDestinationItemComponent } from './destination-plan-sub-destination-item/destination-plan-sub-destination-item.component';
import { DestinationPlanSubDestinationBtnComponent } from './destination-plan-sub-destination-btn/destination-plan-sub-destination-btn.component';

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

}
