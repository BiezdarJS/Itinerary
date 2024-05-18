import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Signal, computed } from '@angular/core';
import { TemplateTypeEnum } from '../../../enums/template-type.enum';
import { DestinationEnum } from '../../../enums/destinations.enum';
import { DestinationPlanItemComponent } from './destination-plan-item/destination-plan-item.component';
import { IDestinationPlanDay } from '../../../interfaces/i-destinations';
import { DragDestinationHereComponent } from './drag-destination-here/drag-destination-here.component';
import {CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'iy-destination-plan-day',
  standalone: true,
  imports: [DragDropModule, DestinationPlanItemComponent, DragDestinationHereComponent],
  templateUrl: './destination-plan-day.component.html',
  styleUrl: './destination-plan-day.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DestinationPlanDayComponent {
  @Input() destinationPlanDay?: IDestinationPlanDay;

  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  public doesNotHaveMoreThanOneDestination: Signal<boolean | undefined> = computed(() => {
    if (this.destinationPlanDay) {
      return this.destinationPlanDay?.Destinations.length < 2
    }
    return;
  });

  protected readonly TemplateTypeEnum = TemplateTypeEnum;
  protected readonly DestinationEnum = DestinationEnum;

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    ) } else {
      transferArrayItem (
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }


  refreshItem() {
    console.log('dodano nowy subdestination');
    this.cdr.detectChanges();
  }
}
