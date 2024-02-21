import { Component } from '@angular/core';
import { ActionBtnComponent } from '../../_shared/components/action-btn/action-btn.component';

@Component({
  selector: 'iy-hero',
  standalone: true,
  imports: [
    ActionBtnComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
