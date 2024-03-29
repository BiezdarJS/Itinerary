import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'iy-header',
  standalone: true,
  imports: [
    NavComponent,
    HeroComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
