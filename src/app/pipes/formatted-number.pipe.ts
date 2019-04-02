import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'FormattedNumber' })
export class FormattedNumberPipe implements PipeTransform {
  transform(value: any): number {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
