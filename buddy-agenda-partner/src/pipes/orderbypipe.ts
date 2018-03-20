import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByPipe'
})
export class OrderByPipe implements PipeTransform {

 transform(array: Array<string>, args: string): Array<string> {

  if(!array || array === undefined || array.length === 0) return null;

  if(!args || args == '' || args == 'cres'){
    array.sort((a: any, b: any) => {
      if (a.time < b.time) {
        return -1;
      } else if (a.time > b.time) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if(args == 'desc'){
    array.sort((a: any, b: any) => {
      if (a.time > b.time) {
        return -1;
      } else if (a.time < b.time) {
        return 1;
      } else {
        return 0;
      }
    });
  }
    return array;
  }

}