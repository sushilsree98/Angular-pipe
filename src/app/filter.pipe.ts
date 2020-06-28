import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredValue:any, propName:string ): any{
    if(value.length === 0 || filteredValue === ''){
      return value;
    }
    const filterArray = [];

    for(const ele of value){
      if(ele[propName] === filteredValue){
        filterArray.push(ele);
      }
    }
    return filterArray;
  }

}
