import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DestinationPlanDayComponent } from './destination-plan-day/destination-plan-day.component';
import { IDestinationPlanDay } from '../../interfaces/i-destinations';
import { DestinationPlanHeaderComponent } from './destination-plan-header/destination-plan-header.component';
import { DestinationPlanFooterComponent } from './destination-plan-footer/destination-plan-footer.component';


@Component({
  selector: 'iy-destination-plan',
  standalone: true,
  imports: [
    DestinationPlanHeaderComponent,
    DestinationPlanFooterComponent,
    DestinationPlanDayComponent,
  ],
  templateUrl: './destination-plan.component.html',
  styleUrl: './destination-plan.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DestinationPlanComponent {
  @Input() destinationPlan?: IDestinationPlanDay[];



}
