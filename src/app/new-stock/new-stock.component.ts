import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-new-stock',
  templateUrl: './new-stock.component.html',
  styleUrls: ['./new-stock.component.css']
})
export class NewStockComponent implements OnInit {

  newStockSymbol = '';

  constructor(private stockService: StockService) { }

  ngOnInit() {
  }

  addStock() {
    this.stockService.addStock(this.newStockSymbol);
  }

}
