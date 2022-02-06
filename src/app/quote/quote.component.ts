import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  quotes:Quote[] = [
    new Quote ("Emancipate yourselves from mental slavery, none but ourselves can free our minds", "Bob Marley", "Lewis Murgor", new Date(2021,1,9)),
    new Quote("Wisdom is greater than silver and gold.", "Bob Marley", "Daniel Omondi", new Date(2021,3,29))
  ];

  deleteQuote(isRead: any, index: number){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

    if (toDelete) {
      this.quotes.splice(index,1);
    }
  }

  QuoteComponent.constructor();{

  this.ngOnInit(); void {}

  }}}



