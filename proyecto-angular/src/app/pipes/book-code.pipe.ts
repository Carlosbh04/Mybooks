import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookCode'
})
export class BookCodePipe implements PipeTransform {

<<<<<<< HEAD
  transform(id:number): string {
    const paddedId = id.toString().padStart(1);
    return `Ref-${paddedId}`;
=======
  transform(id: number, customNumber?: number): string {
    const paddedId = id.toString().padStart(3, '0');
    const referenceNumber = customNumber ? customNumber.toString() : paddedId;
    return `Ref-${referenceNumber}`;
>>>>>>> dia5
  }

}
