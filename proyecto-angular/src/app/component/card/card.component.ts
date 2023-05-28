import { Component, Input,Output, EventEmitter, OnInit, } from '@angular/core';
import { Books } from 'src/app/models/books';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() book!:Books;
  @Input() i! : number;
  @Output() remove = new EventEmitter<Books>();

  ngOnInit(): void { }
 
  isEven(i: number): boolean {
    return i % 2 === 0;
  }
  removeCard():void{
    this.remove.emit(this.book)
  }
}

 


    




  