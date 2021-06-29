import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, of } from 'rxjs';
import { mergeMap, switchMap, concatMap, delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css']
})
export class RxjsOperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // SwitchMap example
    const obs$1 = fromEvent(document, 'click');
    const obs$2 = interval(1000);
    const finalObs$ = obs$1.pipe(
      switchMap(event => obs$2)
    );
    // const subscription = finalObs$.subscribe((value) => console.log(value));

    //MergeMap example
    console.log("mergeMap example");
    of('Angular', 'ReactJs', 'VUEJS').pipe(
      mergeMap(el=>of(1,2).pipe(
        delay(2000),
        map(num=>el + ' ' + num)
      ))
    ).subscribe(res=>console.log('mM', res));

    //SwitchMap example
    console.log("switchMap example");
    of('Angular', 'ReactJs', 'VUEJS').pipe(
      switchMap(el=>of(1,2).pipe(
        //delay(2000),
        map(num=>el + ' ' + num)
      ))
    ).subscribe(res=>console.log('sM', res));
    
    //concatMap example - works same as switchMap but inner observables are concatenated
    console.log("concatMap example");
    of('Angular', 'ReactJs', 'VUEJS').pipe(
      concatMap(el=>of(1,2).pipe(
        delay(2000),
        map(num=>el + ' ' + num)
      ))
    ).subscribe(res=>console.log('cM', res));
  }

}
