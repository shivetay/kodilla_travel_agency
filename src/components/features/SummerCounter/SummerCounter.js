import React from 'react';
import PropTypes from 'prop-types';
import styles from './SummerCounter.scss';
import { settings } from '../../../data/dataStore';

class SummerCounter extends React.Component {
  static propTypes = {
    summerDescription: PropTypes.string,
    noSummer: PropTypes.string,
    oneDaySummer: PropTypes.string,
    renderElementFunc: PropTypes.func,
  }

  static defaultProps = {
    summerDescription: settings.summerDescription,
    noSummer: settings.noSummer,
    oneDaySummer: settings.oneDaySummer,
  }


  dayCount(){
    const today = new Date();
    const summer = new Date(today.getUTCFullYear(), 5, 21);
    const oneDay = 1000*60*60*24;

    if( 
      today.getUTCMonth() === 8 && today.getUTCDate() >23 || today.getUTCMonth() >= 9) {
      summer.setUTCFullYear(summer.getUTCFullYear()+1);
    } else if (today.getUTCMonth() === 5 && today.getUTCDate() >=21 || today.getUTCMonth() >= 6) {
      return 0;
    }
    return Math.ceil((summer.getTime() - today.getTime())/(oneDay));
  }

  renderElement(){
    let renderElementDate = new Date();
    let summerCounter = this.dayCount();

    if(summerCounter === 1) {
      renderElementDate = summerCounter + this.props.oneDaySummer ;
    } else if (renderElementDate.getUTCMonth() === 5 && renderElementDate.getUTCDate() >=21 || 
    renderElementDate.getUTCMonth() > 5 && renderElementDate.getUTCMonth() < 8 ||renderElementDate.getUTCMonth() === 8 && renderElementDate.getUTCDate() <= 23){
      renderElementDate = this.props.noSummer;
    } else {
      renderElementDate = summerCounter + this.props.summerDescription;
    }
    return renderElementDate;
  }

  render() {
    return (
      <div className={styles.component}>
        <h3 className={styles.summerCounter}>
          {this.renderElement()}
        </h3>
      </div>
    );
  }
}

export default SummerCounter;