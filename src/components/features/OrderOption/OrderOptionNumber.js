import React from 'react';
import styles from './OrderOption.scss';



const OrderOptionsNumber = ({limits, currentValue, setOptionValue}) => (
  <div className={styles.number}>
    <input
      type='number'
      className={styles.inputSmall}
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
    
  </div>
);

export default OrderOptionsNumber;