import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  currentSymbols: string[] = [];

  constructor() { }

  addStock(symbol: string) {
    this.currentSymbols.push(symbol);
  }

  loadQuotes() {

  }

}

export interface Quote {
  symbol: string;
  name: string;
  change: string;
  currency: string;
  lastTradeDate: string;
  lastTradePriceOnly: string;
  changeinPercent: string;
  lastTradeTime: string;
}

export interface Result {
  quote: Quote[];
}

export interface Query {
  count: number;
  created: string;
  lang: string;
  results: Result;
}

export interface RootObject {
  query: Query;
}