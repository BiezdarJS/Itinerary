import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SetItineraryComponent } from './3-set-itinerary/set-itinerary.component';

@Component({
  selector: 'iy-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SetItineraryComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'itinerary';
}
