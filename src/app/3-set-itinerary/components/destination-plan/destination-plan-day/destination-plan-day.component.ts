import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TemplateTypeEnum } from '../../../enums/template-type.enum';
import { DestinationEnum } from '../../../enums/destinations.enum';
import { DestinationPlanItemComponent } from '../destination-plan-item/destination-plan-item.component';
import { IDestinationPlanDay } from '../../../const/i-destination-plan';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'iy-destination-plan-day',
  standalone: true,
  imports: [DestinationPlanItemComponent, JsonPipe],
  templateUrl: './destination-plan-day.component.html',
  styleUrl: './destination-plan-day.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DestinationPlanDayComponent {
  @Input() destinationPlanDay?: IDestinationPlanDay;
  protected readonly TemplateTypeEnum = TemplateTypeEnum;
  protected readonly DestinationEnum = DestinationEnum;
}
