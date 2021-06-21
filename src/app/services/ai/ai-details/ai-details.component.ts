import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-ai-details',
  templateUrl: './ai-details.component.html',
  styleUrls: ['./ai-details.component.css']
})
export class AiDetailsComponent implements OnInit {

  // Declare event emitter
  @Output() ShowDetails: EventEmitter<ElementRef> = new EventEmitter<ElementRef>();
  // Get a reference to the DOM element "details" to be output in the emitter
  @ViewChild('details', {static: false, read:ElementRef}) details: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onExplore() {
    // Emit the DOM element reference
    this.ShowDetails.emit(this.details.nativeElement);
  }

}
