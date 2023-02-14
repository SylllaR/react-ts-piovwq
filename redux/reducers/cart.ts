import { Cart, AddProduct } from '../../constatnts';
import cart from '../store/cart';

export default function (state = cart, action) {
  switch (action.type) {
    case Cart.FETCH:
      return {
        ...state,
      };
    case AddProduct.FETCH:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
