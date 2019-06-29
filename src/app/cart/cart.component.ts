import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items: any;

  constructor(
    private cart: CartService
  ) {
    this.items = this.cart.getItems();
  }

  ngOnInit() {
  }

}
