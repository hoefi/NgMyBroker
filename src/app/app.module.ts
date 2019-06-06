import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NewStockComponent } from './new-stock/new-stock.component';
import { StockViewComponent } from './stock-view/stock-view.component';


@NgModule({
  declarations: [
    AppComponent,
    NewStockComponent,
    StockViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
