import { Directive, TemplateRef,ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomLoop]'
})
export class CustomLoopDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }
  @Input('appCustomLoop') set loop(num:number){
    for(var i=0;i<num;i++){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

}
