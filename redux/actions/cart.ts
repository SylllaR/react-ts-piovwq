import { Cart, AddProduct } from '../../constatnts';

export const getCartAmountAction = () => ({
  type: Cart.FETCH,
});

export const addProductAction = (payload: any) => ({
  type: AddProduct.FETCH,
  payload,
});
