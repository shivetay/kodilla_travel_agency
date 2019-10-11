import React from 'react';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
// import style from './OrderForm.scss';

import {Grid, Row, Col} from 'react-flexbox-grid';
import Section from '../../layout/Section/Section';
import Button from '../../common/Button/Button';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
import settings from '../../../data/settings';

const sendOrder = (options, tripCost, tripName, tripId, countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripName,
    tripId,
    countryCode,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};


const OrderForm = (props ,tripCost, options, setOrderOption, tripName, tripId, countryCode) => (
  <Section>
    <Grid>
      <form onSubmit={() => sendOrder(options, tripCost, tripName, tripId, countryCode)}>
        <Row>
          {pricing.map(pricingData => (
            <Col md={4} key={pricingData.id}>
              <OrderOption currentValue={options[pricingData.id]} setOrderOption={setOrderOption} {...pricingData}/>
            </Col>
          ))}
          <Col xs={12}>
            <OrderSummary tripCost={props.tripCost} options={props.options} />
            {options.currentValue}
          </Col>
          <Button onClick={() => sendOrder(options, tripCost)}>Order now!</Button>
        </Row>
      </form>
    </Grid>
  </Section>
);

OrderForm.propTypes = {
  tripCost: PropTypes.node,
  options: PropTypes.object,
};

export default OrderForm;