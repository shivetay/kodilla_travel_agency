import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';
import { formatTime } from '../../../utils/formatTime';
import { settings } from '../../../data/dataStore';

class HappyHourAd extends React.Component {
  
  static propTypes = {
    title: PropTypes.string,
    promoDescription: PropTypes.string,
    renderElementFunc: PropTypes.func,
  }

  static defaultProps = {
    title: settings.title,
    promoDescription: settings.promoDescription,
  }

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));
  
    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }
  
    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }

  renderElementFunc() {
    let renderElement;
    let promoTimer = this.getCountdownTime();

    if(promoTimer <= 43199 || promoTimer >= 46800) {
      renderElement = formatTime(promoTimer);
    } else {
      renderElement = this.props.promoDescription;
    }
    return renderElement;
  }
  constructor(){
    super();
    setInterval(() => this.forceUpdate(), 1000);
  }
  render() {
    const{ title } = this.props;
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.promoDescription}>
          {this.renderElementFunc()}
        </div>
      </div>
    );
  }
}



export default HappyHourAd;
