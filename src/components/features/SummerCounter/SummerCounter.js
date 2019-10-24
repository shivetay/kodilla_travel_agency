import React from 'react';
import styles from './SummerCounter.scss';

class SummerCounter extends React.Component {

  //FIXME:
  dayCount(){
    const today = new Date();
    const summer = new Date(today.getUTCFullYear(), 5, 21);
    const oneDay = 1000*60*60*24;

    if(today.getUTCMonth() === 5 && today.getUTCDate() >=21 ) {
      summer.setUTCFullYear(summer.getUTCFullYear()+1);
    }
    return Math.ceil((summer.getTime() - today.getTime())/(oneDay));
  }

  render() {
    return (
      <div className={styles.component}>
        <h3 className={styles.summerCounter}>
          {this.dayCount()}
        </h3>
      </div>
    );
  }
}

export default SummerCounter;