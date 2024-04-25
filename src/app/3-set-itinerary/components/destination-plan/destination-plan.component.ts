import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DestinationPlanDayComponent } from './destination-plan-day/destination-plan-day.component';
import { IDestinationPlanDay } from '../../const/i-destination-plan';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'iy-destination-plan',
  standalone: true,
  imports: [DestinationPlanDayComponent, JsonPipe],
  templateUrl: './destination-plan.component.html',
  styleUrl: './destination-plan.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DestinationPlanComponent {
  @Input() destinationPlan?: IDestinationPlanDay[];

}
