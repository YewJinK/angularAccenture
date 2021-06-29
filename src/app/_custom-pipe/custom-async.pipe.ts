import { Pipe, PipeTransform } from '@angular/core';
import { of, from } from 'rxjs';
import { delay, concatMap } from 'rxjs/internal/operators';

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
