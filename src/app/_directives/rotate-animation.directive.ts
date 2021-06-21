import { Directive , ElementRef} from '@angular/core';

@Directive({
  selector: '[appRotateAnimation]'
})
export class RotateAnimationDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.classList = 'imgRotate'
  }

}
