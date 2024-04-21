import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DestinationDayComponent } from './destination-plan-day/destination-plan-day.component';


@Component({
  selector: 'iy-destination-plan',
  standalone: true,
  imports: [DestinationDayComponent],
  templateUrl: './destination-plan.component.html',
  styleUrl: './destination-plan.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DestinationPlanComponent {

}
