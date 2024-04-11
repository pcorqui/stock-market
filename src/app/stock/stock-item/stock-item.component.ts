import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {


  @Input() public stock: Stock = new Stock('abc', 'abc hijo ',85,80);
  @Output() private toggleFavorite = new EventEmitter();
  public stocks: Stock[] = [];

  public stockClasses: Object = {};

  constructor() { }

  ngOnInit(): void {
    let diff = (this.stock.price / this.stock.previousPrice) - 1;
    let largeChage = Math.abs(diff) > 0.01;
    this.stockClasses = {
      "positive" : this.stock.isPositiveChange(),
      "negative" : !this.stock.isPositiveChange(),
      "large-change": largeChage,
      "small-change": !largeChage
    };

    this.stocks = [ new Stock('peras', 'TSC',85,80),
                    new Stock('manzanas', 'TSC',85,80),
                    new Stock('Ciruelas', 'TSC',85,80)];

  }

  toggleFavoriteMethod(event: Event, index: number){
    console.log('We are toggling the favorite state for this stock',event);
    this.stocks[index].favorite = !this.stocks[index].favorite;
  }

  onToggleFavorite(index: number){
    this.toggleFavorite.emit(this.stocks[index]); //esto emite el valor de stock
  }

}
