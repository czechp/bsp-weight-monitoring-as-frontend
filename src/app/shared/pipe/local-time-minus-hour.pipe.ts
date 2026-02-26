import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localTimeMinusHour'
})
export class LocalTimeMinusHourPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof value !== 'string') return null;
    const date = new Date(value);
    if (isNaN(date.getTime())) return null;

    date.setHours(date.getHours() - 1);

    const pad = (n: number) => n.toString().padStart(2, '0');
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());

    return `${hours}:${minutes}`;
  }

}
