import { Component } from '@angular/core';
import { Stock } from './model/stock';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stock-market';

  public stockObj: Stock = new Stock('Desde el padre','TSC desde el padre',85,80);

  toggleFavoritePadre(stock : Stock){
    console.log('el producto', stock , 'was triggered');
  }
}
