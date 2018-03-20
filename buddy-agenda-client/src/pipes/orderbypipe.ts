import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByPipe'
})
export class OrderByPipe implements PipeTransform {

  transform(items: any[], property: string, ordtype: string): any[] {

    if (!items) return [];
    if (!property || property == '') return items;

    if(ordtype == 'dsc')
      return items.sort(function(a,b) {return (a[property] < b[property]) ? 1 : ((b[property] < a[property]) ? -1 : 0);} );
    else
      return items.sort(function(a,b) {return (a[property] > b[property]) ? 1 : ((b[property] > a[property]) ? -1 : 0);} );
  }

}