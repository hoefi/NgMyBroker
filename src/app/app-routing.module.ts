import { NewStockComponent } from './new-stock/new-stock.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockViewComponent } from './stock-view/stock-view.component';

const routes: Routes = [
  { path: '', component: StockViewComponent },
  { path: 'addStock', component: NewStockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
