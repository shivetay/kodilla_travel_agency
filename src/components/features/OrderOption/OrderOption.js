import React from 'react';
// import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionNumber from './OrderOptionNumber';
import OrderOptionDropdown from './OrderOptionDropdwon';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
};

const OrderOption = ({name, type, id, setOrderOption, ...otherProps}) => {
  const OptionComponent = optionTypes[type];
  if(!OptionComponent){
    return null;
  } else {
    return(
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent {...otherProps} setOptionValue={value => setOrderOption({[id]: value})} />
      </div>
    );
  }
};

export default OrderOption;