import { Header } from './component';
import get from 'lodash/get';
import { connect } from 'react-redux';
import { getCartAmountAction } from '../../redux/actions/cart';

export const mapStateToProps = (state) => ({
  cart: get(state, 'cart', {}),
});

export const mapDispatchToProps = (dispatch) => ({
  getCartAmount: () => dispatch(getCartAmountAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
