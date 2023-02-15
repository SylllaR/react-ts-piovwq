import { DefaultLayout } from './component';
import get from 'lodash/get';
import { connect } from 'react-redux';

export const mapStateToProps = (state) => ({
  isOpenCartModal: get(state, 'cart.isOpen', false),
});

export default connect(mapStateToProps, null)(DefaultLayout);
