import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (
  <div className={styles.icon}>

    {required ? '' : (
      <div
        className={styles.icon}
        value={currentValue}
        onChange={() => setOptionValue('')}>
        <Icon name={'times-circle'} />None
      </div>
    )}

    {values.map(value => (
      <div
        className={` ${styles.icon} ${currentValue === value.id ? styles.iconActive: ''}`}
        key={value.id}
        value={currentValue}
        onClick={() => setOptionValue(value.id)}>
        <Icon name={value.icon} />
        {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.any,
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.any,
};
export default OrderOptionIcons;