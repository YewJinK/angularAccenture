import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  // Subject example
  SharingData = new Subject();
  
  // BehaviourSubject example
  object = [];
  private subject = new BehaviorSubject<any>(this.object);
  currentObject = this.subject.asObservable();

  constructor() { }
  
  emitData(supplyObject:any)
  {
    this.subject.next(supplyObject); 
  }
}
