import React from 'react';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionsIcons = ({values, required, currentValue, setOptionValue}) => (
  <div className={styles.icon}>

    {required ? '' : (
      <div
        className={styles.icon}
        value={currentValue}
        onChange={value => setOptionValue('')}>
        <Icon name={'times-circle'} />None
      </div>
    )}

    {values.map(value => (
      <div
        className={` ${styles.icon} ${currentValue === value.id ? styles.iconActive: ''}`}
        key={value.id}
        value={currentValue}
        onClick={event => setOptionValue(value.id)}>
        <Icon name={value.icon} />
        {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);
export default OrderOptionsIcons;