import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActionBtnComponent } from '../../../../_shared/components/action-btn/action-btn.component';
import { DestinationPlanService } from '../../../services/destination-plan.service';

@Component({
  selector: 'iy-destination-plan-footer',
  standalone: true,
  imports: [ActionBtnComponent],
  templateUrl: './destination-plan-footer.component.html',
  styleUrl: './destination-plan-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DestinationPlanFooterComponent {
}
