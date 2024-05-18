import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Signal, WritableSignal, computed, signal } from '@angular/core';
import { DestinationPlanSubDestinationItemComponent } from './destination-plan-sub-destination-item/destination-plan-sub-destination-item.component';
import { DestinationPlanSubDestinationBtnComponent } from './destination-plan-sub-destination-btn/destination-plan-sub-destination-btn.component';
import { ISubDestination } from '../../../../interfaces/i-destinations';
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

  private _subDestinationsCount: WritableSignal<number | undefined> = signal(this.subDestinations?.length);
  public subDestinationsExist: Signal<boolean> = computed(() => this._subDestinationsCount()! > 0);


  constructor(
    private matDialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this._subDestinationsCount.set(this.subDestinations?.length);
  }

  public openSubDestinationModal() {
    let dialogRef = this.matDialog.open(DestinationPlanSubDestinationModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.cdr.markForCheck();
      if (result) {
        this.subDestinations?.push(result);
        this._subDestinationsCount.set(this.subDestinations?.length);
      }
    });
  }

}
