import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inversePipe'
})
export class InversePipePipe implements PipeTransform {

  transform(value: any): any {
    let item = "";
    for (let i = value.length - 1; i >= 0; i--) {
      item += value[i]
    }
    return item;
  }

}
