import {Pipe, PipeTransform} from '@angular/core';
import {Album} from './album.model';

@Pipe({
  name: "filterbyprice",
  pure: false
})


export class FilterByPricePipe implements PipeTransform {
  transform(input: Album[], maxPrice:number){
    var output: Album[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].price <= maxPrice) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
