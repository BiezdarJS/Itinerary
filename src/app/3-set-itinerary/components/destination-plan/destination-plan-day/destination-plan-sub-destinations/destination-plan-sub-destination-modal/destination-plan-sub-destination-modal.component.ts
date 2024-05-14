import { Component, Inject } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ISubDestination } from '../../../../../interfaces/i-destination-plan';

@Component({
  selector: 'iy-destination-plan-sub-destination-modal',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './destination-plan-sub-destination-modal.component.html',
  styleUrl: './destination-plan-sub-destination-modal.component.scss'
})
export class DestinationPlanSubDestinationModalComponent {

  constructor(
    private dialog: MatDialogRef<DestinationPlanSubDestinationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public subDestination: ISubDestination
  ) {}


  public closeDialog() {
    this.dialog.close({ Name: this.subDestination});
  }
}
