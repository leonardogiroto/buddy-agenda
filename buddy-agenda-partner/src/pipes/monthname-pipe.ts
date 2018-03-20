import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthname'
})
export class MonthNamePipe implements PipeTransform {
  transform(monthIndex: number): string {
    let monthNames = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ];
    return monthNames[monthIndex];
  }
}