import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descshortner'
})
export class DescshortnerPipe implements PipeTransform {

  transform(desc:string, n:number): string {
     return desc.substr(0,n);
  }

}
