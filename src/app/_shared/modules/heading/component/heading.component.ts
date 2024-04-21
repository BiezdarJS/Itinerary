import { NgTemplateOutlet } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 'iy-heading',
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss'
})
export class HeadingComponent {

  /** Heading */
  heading: TemplateRef<HTMLElement> | null = null;
  /** Description below heading */
  description: TemplateRef<HTMLElement> | null = null;
  /** Flag determining whether heading sholud be centered or not */
  isCenter: boolean = false;
  /** Heading custom CSS class */
  headingCustomClass: string = '';
  /** Description custom CSS class */
  descriptionCustomClass: string = '';

}
