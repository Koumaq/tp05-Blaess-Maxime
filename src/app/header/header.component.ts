import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { CartState } from '../cart.state';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Select(CartState.itemCount) itemCount$!: Observable<number>;
}
