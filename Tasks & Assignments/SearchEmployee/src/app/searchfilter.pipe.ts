import { Pipe, PipeTransform } from '@angular/core';
import { Iemployee } from './iemployee';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(employeeData:Iemployee[], searchValue: string): Iemployee[] {

    if(!employeeData || !searchValue){
      return employeeData;
    }
    return employeeData.filter(emp =>
       emp.firstName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
