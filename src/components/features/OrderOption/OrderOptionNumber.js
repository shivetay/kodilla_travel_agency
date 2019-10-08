import React from 'react';
import PropTypes from 'prop-types';
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

OrderOptionsNumber.propTypes = {
  limits: PropTypes.any,
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.any,
};

export default OrderOptionsNumber;