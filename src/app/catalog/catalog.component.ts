import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddToCart } from '../cart.state';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})

export class CatalogComponent {
  products = ['Produit 1', 'Produit 2', 'Produit 3'];

  constructor(private store: Store) {}

  addToCart(product: string): void {
    this.store.dispatch(new AddToCart(product));
  }
}