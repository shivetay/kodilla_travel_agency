import React from 'react';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing';
import OrderSummary from '../OrderSummary/OrderSummary';
// import style from './OrderForm.scss';

import {Grid, Row, Col} from 'react-flexbox-grid';
import Section from '../../layout/Section/Section';
import OrderOption from '../OrderOption/OrderOption';


const OrderForm = (props) => (
  <Section>
    <Grid>
      <Row>
        {pricing.map(pricingData => (
          <Col md={4} key={pricingData.id}>
            <OrderOption {...pricingData}/>
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary tripCost={props.tripCost} options={props.options} />
        </Col>
      </Row>
    </Grid>
  </Section>
);

OrderForm.propTypes = {
  tripCost: PropTypes.node,
  options: PropTypes.object,
};

export default OrderForm;