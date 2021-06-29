import { Pipe, PipeTransform } from '@angular/core';
import { of, interval } from 'rxjs';
import { from, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { concatMap } from 'rxjs/internal/operators';

@Pipe({
  name: 'customAsync'
})

// Custom pipe that pulls data at specific intervals
export class CustomAsyncPipe implements PipeTransform {

  result: any = [];

  transform(value: any, delayInSec: number = 1): any {
    from(value).pipe(
      concatMap(item => of(item).pipe(delay(delayInSec * 1000)))
    ).subscribe(data => {
      this.result.push(data);
    });

    return this.result;
  }
}
