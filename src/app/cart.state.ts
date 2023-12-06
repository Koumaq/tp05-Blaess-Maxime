import { State, Action, StateContext, Selector } from '@ngxs/store';

export class AddToCart {
  static readonly type = '[Cart] AddToCart';

  constructor(public product: string) {}
}

export class RemoveFromCart {
  static readonly type = '[Cart] RemoveFromCart';

  constructor(public product: string) {}
}

  export interface CartStateModel {
    items: string[];
  }

@State<CartStateModel>({
  name: 'cart',
  defaults: {
    items: [],
  },
})
export class CartState {
    @Selector()
    static getItems(state: CartStateModel): string[] {
      return state.items;
    }
    @Selector()
    static itemCount(state: CartStateModel): number {
      return state.items.length;
    }

  @Action(AddToCart)
  addToCart(ctx: StateContext<CartStateModel>, action: AddToCart): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: [...state.items, action.product],
    });
  }

  @Action(RemoveFromCart)
  removeFromCart(ctx: StateContext<CartStateModel>, action: RemoveFromCart): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: state.items.filter(item => item !== action.product),
    });
  }
}

