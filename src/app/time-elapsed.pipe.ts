import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeElapsed'
})
export class TimeElapsedPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDay())
    var timeElapsed = Math.abs(todayWithNoTime-value);
    const secondsInDay = 86400;
    var timeElapsedSeconds = timeElapsed*0.001;
    var dateCount = timeElapsedSeconds/secondsInDay;

    return dateCount;
  }

}
