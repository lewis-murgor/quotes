import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {name:"Emancipate yourselves from mental slavery, none but ourselves can free our minds", author:"Bob Marley", votes:10, publishedDate:new Date(2021,1,9)},
    {name:"Wisdom is greater than silver and gold.", author:"Bob Marley", votes:27, publishedDate:new Date(2021,3,29)}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
