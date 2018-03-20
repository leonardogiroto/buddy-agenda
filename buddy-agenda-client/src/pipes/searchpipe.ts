import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})

@Injectable()
export class FilterPipe implements PipeTransform {
    transform(items: any[], fields : string[], value : string): any[] {  
        if (!items) return [];
        if (!value || value == '') return items;

        let ConcatedItems = [];
        for (let i = 0; i < fields.length; i++) {
        	let Filtered = items.filter(it => it[fields[i]].toLowerCase().includes(value.toLowerCase())); 
        	ConcatedItems = ConcatedItems.concat(Filtered);
        }

	    for(let i = 0; i < ConcatedItems.length; i++) {
	        for(let j = i + 1; j < ConcatedItems.length; j++) {
	            if(ConcatedItems[i] === ConcatedItems[j])
	                ConcatedItems.splice(j--, 1);
	        }
	    }

        return ConcatedItems;
    }
}