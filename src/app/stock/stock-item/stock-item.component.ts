import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public name:string = "";
  public code: string = "";
  public price: number = 0.0;
  public previousPrice: number = 0.0;
  public positiveChange: boolean = true;
  public favorite: boolean = false;

  constructor() { }

  ngOnInit(): void {

    this.name = 'Test Stock Company';
    this.code = 'TCS';
    this.price = 85;
    this.previousPrice = 80;
    this.positiveChange = this.price >= this.previousPrice;
    this.favorite = false;
  }

  toggleFavorite(){
    console.log('We are toggling the favorite state for this stock');
    this.favorite = !this.favorite;
  }

}
