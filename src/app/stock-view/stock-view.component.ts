import { StockService, Quote } from './../stock.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-view',
  templateUrl: './stock-view.component.html',
  styleUrls: ['./stock-view.component.css']
})
export class StockViewComponent implements OnInit {

  quoteList: Quote[] = [];

  constructor(private stockService: StockService) { }

  ngOnInit() {
  }

  get currentSymbols() {
    return this.stockService.currentSymbols;
  }
}
