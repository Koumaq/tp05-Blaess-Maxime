import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { CartState, RemoveFromCart } from '../cart.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Select(CartState.getItems) items$!: Observable<string[]>;

  constructor(private store: Store) {}

  removeFromCart(product: string): void {
    this.store.dispatch(new RemoveFromCart(product));
  }
}