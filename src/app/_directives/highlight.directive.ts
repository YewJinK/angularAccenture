import { Directive, ElementRef,Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('highlighter') highlighter;
    constructor(private el: ElementRef) {
       el.nativeElement.style.border = '3px dotted red';
       //console.log(el.nativeElement);
    }
    ngOnInit(){
      this.el.nativeElement.style.backgroundColor = this.highlighter;
      this.el.nativeElement.style.borderRadius = '10px';
    }
}
