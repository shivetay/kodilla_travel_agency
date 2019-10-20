import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';

class HappyHourAd extends React.Component {
  static propTypes = {
    promoDescription: PropTypes.string,
    title: PropTypes.string,
  }

  static defaultProps = {
    title: 'Happy Hour',
  }
  
  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));
  
    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }
  
    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }
  //FIXME:
  constructor() {
    super();
    setInterval(() => this.forceUpdate(), 1000);
  }
  render(){
    const {promoDescription, title} = this.props;
    return(
      <div className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.promoDescription}>{this.getCountdownTime({promoDescription})}</div>
      </div>
    );   
  }
}

//FIXME: test4-7

export default HappyHourAd;
