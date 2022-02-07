import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote("The only thing that overcomes hard luck is hard work", "Harry Golden", "Lewis Murgor", new Date(2021,3,29), 0, 0),
    new Quote("Wisdom is greater than silver and gold", "Bob Marley", "Daniel Ahuba", new Date(2021,1,1), 0, 0),
    new Quote("Love defeats all evil", "Chronixx", "Fabian Kiprop", new Date(2022,0,7), 0, 0)
  ];

  toggle(index:number) {
    this.quotes[index].showQuoteDetails = !this.quotes[index].showQuoteDetails;
  }

  deleteQuote(isRead: any, index: number) {
    if(isRead) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if(toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  publishNewQuote(quote: Quote) {
    quote.publishedDate = new Date(quote.publishedDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}





