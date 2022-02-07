export class Quote {
  showQuoteDetails: boolean;
  constructor(public name:string, public author:string, public publisher:string, public publishedDate: Date) {
    this.showQuoteDetails = false;
  }
}
