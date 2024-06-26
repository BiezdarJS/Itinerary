import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'iy-destination-plan-sub-destination-item',
  standalone: true,
  imports: [],
  templateUrl: './destination-plan-sub-destination-item.component.html',
  styleUrl: './destination-plan-sub-destination-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DestinationPlanSubDestinationItemComponent {
  @Input() text: string | null = '';
}
