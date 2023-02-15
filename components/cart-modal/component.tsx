import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classNames.bind(styles);

export const CartModal: React.FC<{
  cart: any;
  openCartModal: any;
  cancelAllOrders: any;
}> = ({ cart, openCartModal, cancelAllOrders }) => {
  const closeModal = () => {
    openCartModal(false);
  };

  return (
    <div className={cx('cart-modal')}>
      <button onClick={closeModal}>X</button>
      <button onClick={cancelAllOrders}>Cancel All</button>
      <p className={cx('p')}>{JSON.stringify(cart.order)}</p>
    </div>
  );
};
