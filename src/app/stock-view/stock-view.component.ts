import { StockService, Quote } from './../stock.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stock-view',
  templateUrl: './stock-view.component.html',
  styleUrls: ['./stock-view.component.css']
})
export class StockViewComponent implements OnInit {

  @Input()
  quoteList: Quote[] = [];

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.reloadQuoteList();
  }

  reloadQuoteList() {
    this.stockService.loadQuotes().subscribe(quotes => { this.quoteList = quotes; });
  }

  get currentSymbols() {
    return this.stockService.currentSymbols;
  }

  isNegativeValue(value): boolean {
    return parseFloat(value) < 0;
  }

}
