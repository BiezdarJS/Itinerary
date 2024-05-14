import { ChangeDetectionStrategy, Component, Input, Signal, computed } from '@angular/core';
import { TemplateTypeEnum } from '../../../enums/template-type.enum';
import { DestinationEnum } from '../../../enums/destinations.enum';
import { DestinationPlanItemComponent } from './destination-plan-item/destination-plan-item.component';
import { IDestinationPlanDay } from '../../../interfaces/i-destination-plan';
import { DragDestinationHereComponent } from './drag-destination-here/drag-destination-here.component';

@Component({
  selector: 'iy-destination-plan-day',
  standalone: true,
  imports: [DestinationPlanItemComponent, DragDestinationHereComponent],
  templateUrl: './destination-plan-day.component.html',
  styleUrl: './destination-plan-day.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DestinationPlanDayComponent {
  @Input() destinationPlanDay?: IDestinationPlanDay;

  public hasMoreThanOneDestination: Signal<boolean | undefined> = computed(() => {
    if (this.destinationPlanDay) {
      return this.destinationPlanDay?.Destinations.length > 2
    }
    return;
  });

  protected readonly TemplateTypeEnum = TemplateTypeEnum;
  protected readonly DestinationEnum = DestinationEnum;
}
