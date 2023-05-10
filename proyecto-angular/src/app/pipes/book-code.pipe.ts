import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({
  name: 'bookCode'
})
export class BookCodePipe implements PipeTransform {

  transform(id:number): string {
    const paddedId = id.toString().padStart(1);
    return `Ref-${paddedId}`;
  }
  
}