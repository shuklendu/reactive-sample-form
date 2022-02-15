import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): any {
    let formattedDate = '';
    if (value) {
      const date = new Date(value);
      formattedDate =
        (date.getMonth() < 10
          ? '0' + date.getMonth()
          : date.getMonth()) + '-' + date.getFullYear();
    }
    return formattedDate;
  }
}
