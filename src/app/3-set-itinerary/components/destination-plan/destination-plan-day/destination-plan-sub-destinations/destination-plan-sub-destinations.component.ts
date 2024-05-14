import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Signal, computed } from '@angular/core';
import { DestinationPlanSubDestinationItemComponent } from './destination-plan-sub-destination-item/destination-plan-sub-destination-item.component';
import { DestinationPlanSubDestinationBtnComponent } from './destination-plan-sub-destination-btn/destination-plan-sub-destination-btn.component';
import { ISubDestination } from '../../../../interfaces/i-destination-plan';
import { DestinationPlanSubDestinationModalComponent } from './destination-plan-sub-destination-modal/destination-plan-sub-destination-modal.component';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'iy-destination-plan-sub-destinations',
  standalone: true,
  imports: [
    MatDialogModule,
    DestinationPlanSubDestinationItemComponent,
    DestinationPlanSubDestinationBtnComponent,
    DestinationPlanSubDestinationModalComponent
  ],
  templateUrl: './destination-plan-sub-destinations.component.html',
  styleUrl: './destination-plan-sub-destinations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DestinationPlanSubDestinationsComponent {
  @Input() destinationID?: number;
  @Input() subDestinations?: ISubDestination[];



  public subDestinationsExist: Signal<boolean | undefined> = computed(() => {
    if (this.subDestinations) {
      return this.subDestinations?.length > 0;
    }
    return;
  });


  constructor(
    private matDialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {}

  public openSubDestinationModal() {
    let dialogRef = this.matDialog.open(DestinationPlanSubDestinationModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.cdr.markForCheck();
      if (result) {
        this.subDestinations?.push(result);
      }
    });
  }

}
