import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

export enum ElementState {
  OK,
  NOK,
  DISABLED,
}

@Directive({
  selector: '[appElementState]'
})
export class ElementStateDirective implements OnChanges {

  @Input('appElementState') elementState: ElementState = ElementState.OK;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['elementState'] && changes['elementState'].currentValue !== undefined) {
      const state = changes['elementState'].currentValue as ElementState;

      switch (state) {
        case ElementState.OK: {
          this.renderer.addClass(this.el.nativeElement, 'border-success');
          break;
        }
        case ElementState.NOK: {
          this.renderer.addClass(this.el.nativeElement, 'border-nok');
          break;
        }
        case ElementState.DISABLED: {
          this.renderer.addClass(this.el.nativeElement, 'border-disabled');
          break;
        }
        default: {

          break;
        }
      }
    }
  }
}
