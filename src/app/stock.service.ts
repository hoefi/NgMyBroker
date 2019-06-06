import { Query } from './stock.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  currentSymbols: string[] = [];

  constructor(private httpClient: HttpClient) { }

  addStock(symbol: string) {
    this.currentSymbols.push(symbol);
  }

  loadQuotes(): Observable<Quote[]> {
    if (this.addStock) {
      const baseUrl = 'https://stockplaceholder.herokuapp.com/api/stocks';
      let url = baseUrl;
      this.currentSymbols.forEach(symbol => url = url + '/' + symbol);
      return this.httpClient.get<Quote[]>(url);
    } else {
      return new Observable<Quote[]>();
    }
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