import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  @Output() addQuote = new EventEmitter<Quote>();

  publishQuote () {
    this.addQuote.emit(this.newQuote);
  }

  newQuote = new Quote ("", "", "", new Date(), 0, 0);

  constructor() { }

  ngOnInit(): void {
  }

}
