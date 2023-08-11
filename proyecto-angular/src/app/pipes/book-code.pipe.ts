import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookCode'
})
export class BookCodePipe implements PipeTransform {

  transform(Id_book: number | undefined | null, customNumber?: number): string {
    if (Id_book == null || isNaN(Id_book)) {
      console.log('ID inválido:', Id_book);
      return 'Invalid ID';
    }

    const paddedId = Id_book.toString().padStart(3, '0');
    const referenceNumber = customNumber ? customNumber.toString() : paddedId;
    return `Ref-${referenceNumber}`;
  }
}
