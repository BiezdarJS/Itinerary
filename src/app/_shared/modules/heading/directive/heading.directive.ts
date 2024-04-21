import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Directive, ElementRef, EmbeddedViewRef, Injector, Input, OnInit, TemplateRef } from '@angular/core';
import { HeadingComponent } from '../component/heading.component';

@Directive({
  selector: '[iySharedHeading]',
})
export class HeadingDirective implements OnInit {

  /** Heading */
  @Input() heading: TemplateRef<HTMLElement> | null = null;
  /** Description below heading */
  @Input() description: TemplateRef<HTMLElement> | null = null;
  /** Flag determining whether heading sholud be centered or not */
  @Input() isCenter: boolean = false;
  /** Heading custom CSS class */
  @Input() headingCustomClass: string = '';
  /** Description custom CSS class */
  @Input() descriptionCustomClass: string = '';

  /** Reference to Heading Component */
  private componentRef: ComponentRef<HeadingComponent> | null = null;
  /** Element tooltip */
  private headingElement: HTMLElement | null = null;

  /**
   * Class Constructor
   */
  constructor(
    private elementRef: ElementRef,
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
  ) {}


  ngOnInit(): void {
    this.initializeHeading();
  }

  setValues(): void {
    if (this.componentRef !== null) {
      this.componentRef.instance.heading = this.heading;
      this.componentRef.instance.description = this.description;
      this.componentRef.instance.isCenter = this.isCenter;
      this.componentRef.instance.headingCustomClass = this.headingCustomClass;
      this.componentRef.instance.descriptionCustomClass = this.descriptionCustomClass;
    }
  }

  initializeHeading() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(HeadingComponent);
    this.componentRef = componentFactory.create(this.injector);
    this.appRef.attachView(this.componentRef.hostView);
    const [headingDOMElement] = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes;

    this.setValues();
    this.elementRef.nativeElement.appendChild(headingDOMElement);


    this.headingElement = headingDOMElement;
  }


}
