import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {name:"Emancipate yourselves from mental slavery, none but ourselves can free our minds"},
    {name:"Wisdom is greater than silver and gold."}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
