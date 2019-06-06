import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-stock',
  templateUrl: './new-stock.component.html',
  styleUrls: ['./new-stock.component.css']
})
export class NewStockComponent implements OnInit {

  newStockSymbol = '';

  constructor(private stockService: StockService, private router: Router) { }

  ngOnInit() {
  }

  addStock() {
    this.stockService.addStock(this.newStockSymbol);
    this.router.navigate(['']);
  }

}
