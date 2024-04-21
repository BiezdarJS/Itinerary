import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeadingComponent } from '../_shared/components/section-heading/section-heading.component';
import { DestinationPlanComponent } from './components/destination-plan/destination-plan.component';
import { HeadingModule } from '../_shared/modules/heading/heading.module';
import { DestinationListComponent } from './components/destination-list/destination-list.component';

@Component({
  selector: 'iy-set-itinerary',
  standalone: true,
  imports: [
    SectionHeadingComponent,
    DestinationPlanComponent,
    DestinationListComponent,
    HeadingModule
  ],
  templateUrl: './set-itinerary.component.html',
  styleUrl: './set-itinerary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SetItineraryComponent {

}
