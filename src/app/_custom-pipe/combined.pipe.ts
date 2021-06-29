import { UpperCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'combined'
})
export class CombinedPipe implements PipeTransform {

  transform(value: string, separator: string): string {
    let upipe = new UpperCasePipe();
    let result = upipe.transform(value);
    return result.split(' ').join(separator);
  }

}
