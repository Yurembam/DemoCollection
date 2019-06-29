import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../shared/products.model';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: any;

  constructor(
    private route: ActivatedRoute,
    private cart: CartService
  ) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = Products[params.get('productId')];
    });
  }

  addToCart(product: any) {
    window.alert('Your product has been added to the cart');
    this.cart.addToCart(product);
  }

}
