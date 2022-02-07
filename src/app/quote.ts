export class Quote {
  showQuoteDetails: boolean;
  constructor(public name:string, public author:string, public publisher:string, public publishedDate: Date, public upvotes:number, public downvotes:number) {
    this.showQuoteDetails = false;
  }
}
