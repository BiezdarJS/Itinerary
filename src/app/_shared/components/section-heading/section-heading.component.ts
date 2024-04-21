import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'iy-section-heading',
  standalone: true,
  imports: [NgClass, NgTemplateOutlet],
  templateUrl: './section-heading.component.html',
  styleUrl: './section-heading.component.scss'
})
export class SectionHeadingComponent {
  /** Heading part 1*/
  @Input() headingPart1: string | null = null;
  /** Heading part 2 */
  @Input() headingPart2: string | null = null;
  /** Description below heading */
  @Input() description: string | null = null;
  /** Flag determining whether heading sholud be centered or not */
  @Input() isCenter: boolean = false;
  /** Heading custom CSS class */
  @Input() headingCustomClass: string = '';
  /** Description custom CSS class */
  @Input() descriptionCustomClass: string = '';
}
