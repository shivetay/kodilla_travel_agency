import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';

const OrderSummary = props => (
  <h2 className={styles.component}>
    Total: <strong>{calculateTotal(formatPrice(props.summaryCost, props.optionsSummary))}</strong></h2>
);

OrderSummary.propTypes ={
  summaryCost: PropTypes.node,
  optionsSummary: PropTypes.object,
};

export default OrderSummary;