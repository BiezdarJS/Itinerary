import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TemplateTypeEnum } from '../../../enums/template-type.enum';
import { DestinationEnum } from '../../../enums/destinations.enum';
import { DestinationPlanItemComponent } from '../destination-plan-item/destination-plan-item.component';

@Component({
  selector: 'iy-destination-day',
  standalone: true,
  imports: [DestinationPlanItemComponent],
  templateUrl: './destination-plan-day.component.html',
  styleUrl: './destination-plan-day.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DestinationDayComponent {
  protected readonly TemplateTypeEnum = TemplateTypeEnum;
  protected readonly DestinationEnum = DestinationEnum;
}
