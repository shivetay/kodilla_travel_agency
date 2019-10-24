import React from 'react';
import styles from './SummerCounter.scss';

class SummerCounter extends React.Component {

  render() {
    return (
      <div className={styles.component}>
        <h3 className={styles.summerCounter}>Odliczanie</h3>
      </div>
    );
  }
}

export default SummerCounter;